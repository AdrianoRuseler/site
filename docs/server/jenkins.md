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

Managing Multiple Versions

```bash
sudo update-alternatives --config java
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

The "No Password" Way (Most Common for Jenkins)

```bash
sudo visudo
```

Add this line to the very bottom of the file:

```txt
jenkins ALL=(ALL) NOPASSWD: ALL
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

ssh -i ~/jenkins_agent_key jenkins@moodleconf.ct.utfpr.edu.br

ssh -i ~/jenkins_agent_key jenkins@nupet.daelt.ct.utfpr.edu.br

ssh -i ~/jenkins_agent_key jenkins@mini.pc

ssh -i ~/jenkins_agent_key jenkins@docker.adrianoruseler.com

ssh -i ~/jenkins_agent_key jenkins@mysql.adrianoruseler.com
```

## Remove jenkins user

- Stop Jenkins Processes

```bash
# Kill any processes owned by the 'jenkins' user
sudo pkill -u jenkins
```

- Delete the User

```bash
# Remove the user and their home directory (/home/jenkins)
sudo deluser --remove-home jenkins
```

- Re-creating the User (The "Clean" Way)

```bash
# 1. Create the user with a standard home and bash shell
sudo adduser jenkins --shell /bin/bash

# 2. Create the agent workspace
sudo mkdir -p /home/jenkins/agent
sudo chown -R jenkins:jenkins /home/jenkins/agent

# 3. Add your SSH key manually now while logged in as root
sudo mkdir -p /home/jenkins/.ssh
# Replace the string below with your actual public key
echo "ssh-ed25519 ..." | sudo tee /home/jenkins/.ssh/authorized_keys
sudo chown -R jenkins:jenkins /home/jenkins/.ssh
sudo chmod 700 /home/jenkins/.ssh
sudo chmod 600 /home/jenkins/.ssh/authorized_keys

# Add the Jenkins user to the Docker group (Recommended)
sudo usermod -aG docker jenkins
```

## Configuration Reference

When you go back to the Jenkins UI to add the node, use these paths based on the commands above:

- Remote root directory: `/home/jenkins/agent`
- Launch method: Launch agents via SSH
- Host: [Your Remote IP]

Credentials: Select the SSH Private Key you generated in Step 2.

## Host Key Verification Strategy

Controls how Jenkins verifies the SSH key presented by the remote host whilst connecting.

- Inside the Running Container (Direct)

If you don't want to hunt for volume paths, you can inject the key directly into the running container:

```bash
# 1. Enter the container as the jenkins user
docker exec -u jenkins -it <container_id_or_name> bash

# 2. Create the directory and the file
mkdir -p ~/.ssh
ssh-keyscan mysql.adrianoruseler.com >> ~/.ssh/known_hosts
ssh-keyscan moodleconf.ct.utfpr.edu.br >> ~/.ssh/known_hosts
ssh-keyscan docker.adrianoruseler.com >> ~/.ssh/known_hosts
ssh-keyscan iot.adrianoruseler.com >> ~/.ssh/known_hosts
ssh-keyscan mdldocker.adrianoruseler.com >> ~/.ssh/known_hosts

# 3. Secure the permissions
chmod 700 ~/.ssh
chmod 644 ~/.ssh/known_hosts
```
