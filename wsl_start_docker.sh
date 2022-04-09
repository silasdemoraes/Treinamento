#!/bin/bash
echo "### starting script ###"
sleep 2

echo -e "\n## add user in sudoers list ##"
sleep 2
echo '# menbers to control docker service' >> /etc/sudoers
echo "$(whoami) ALL=(ALL) NOPASSWD: /usr/bin/dockerd" >> /etc/sudoers
echo -e "## insert ends ##\n\n## lines inserted to sudoers file ##"
sudo tail -2 /etc/sudoers
sleep 5

echo -e "\n## write commands docker start in system bash file ##"
sleep 2
echo '# Start Docker daemon automatically when logging in if not running.' >> ~/.bashrc
echo 'RUNNING=`ps aux | grep dockerd | grep -v grep`' >> ~/.bashrc
echo 'if [ -z "$RUNNING" ]; then' >> ~/.bashrc
echo '    sudo dockerd > /dev/null 2>&1 &' >> ~/.bashrc
echo '    disown' >> ~/.bashrc
echo 'fi' >> ~/.bashrc
echo -e "## insert ends ##"
sleep 5

echo -e "\n## restart your WSL in Windows with this command ##\nwsl --shutdown"
sleep 5
echo -e "\n### finished script ###\n"
