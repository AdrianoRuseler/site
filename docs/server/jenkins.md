---
id: jenkins-oci
title: Jenkins
description: Jenkins agent related documentation
---

To get your Ubuntu remote agent ready for Jenkins, you'll need to run these commands on the remote machine (the agent) and one or two on your local machine (the controller).

## Prepare the Remote Ubuntu Agent

### Install Java (OpenJDK 21)

Jenkins requires Java to run the agent .jar file. Match this to your Jenkins controller's version.

```bash
sudo apt update
sudo apt install openjdk-21-jdk -y
# Verify installation
java -version
```

### Create a Dedicated Jenkins User

It is safer to run builds under a non-root user.

```bash
# Create a system user named 'jenkins' with a home directory
sudo adduser --system --group --home /home/jenkins jenkins

# Create the workspace directory for Jenkins
sudo mkdir -p /home/jenkins/agent
sudo mkdir /home/jenkins/.ssh
sudo touch /home/jenkins/.ssh/authorized_keys
sudo chown -R jenkins:jenkins /home/jenkins

# Run on the remote machine
ls -ld /home/jenkins/agent

# Change the shell to bash for the jenkins user
sudo chsh -s /bin/bash jenkins
```

### Set Up SSH Access

You need to allow your local Jenkins controller to log into the remote agent without a password.

```bash
# Open the SSH configuration file
sudo nano /etc/ssh/sshd_config

PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys

sudo systemctl restart ssh
```

## On your LOCAL machine (Controller) Generate and Inject SSH Keys

Since Jenkins is in a container, the private key needs to be accessible to the Jenkins UI so it can pass it to the remote agent.

```bash
# 1. Generate keys on your host
ssh-keygen -t ed25519 -f ~/jenkins_agent_key

# 2. Copy the public key to the remote agent
cat ~/jenkins_agent_key.pub
sudo nano /home/jenkins/.ssh/authorized_keys

# 3. View the PRIVATE key (you will copy-paste this into Jenkins UI)
cat ~/jenkins_agent_key
```

```bash
# Test the login manually
ssh -i ~/jenkins_agent_key jenkins@mdldocker.adrianoruseler.com

ssh -i ~/jenkins_agent_key jenkins@iot.adrianoruseler.com
```

## Configuration Reference

When you go back to the Jenkins UI to add the node, use these paths based on the commands above:

- Remote root directory: `/home/jenkins/agent`
- Launch method: Launch agents via SSH
- Host: [Your Remote IP]

Credentials: Select the SSH Private Key you generated in Step 2.

## Reference

- https://gemini.google.com/share/5e66c0e53adf
