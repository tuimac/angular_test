FROM centos:latest

EXPOSE 8080

ARG url=https://github.com/tuimac/simpleweb.git
WORKDIR /root

ADD env/bashrc /root/.bashrc
ADD env/vimrc /etc/vimrc
ADD env/login_screen /root/.login_screen
ADD env/centos/vim.sh /etc/profile.d/vim.sh

RUN yum update -y && \
    yum install -y iproute curl unzip git tree vim* java && \
    mkdir -p /etc/vim/backup && \
    mkdir -p /etc/vim/undo && \
    rm anaconda-ks.cfg anaconda-post.log original-ks.cfg && \
    git clone $url
    
WORKDIR /root/simpleweb/angular_tomcat_mysql
RUN yum install -y maven
