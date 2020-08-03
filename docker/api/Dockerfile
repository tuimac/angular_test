FROM centos:latest

EXPOSE 4200
EXPOSE 80

ARG url=https://github.com/tuimac/simpleweb.git
WORKDIR /root

ADD env/bashrc /root/.bashrc
ADD env/vimrc /etc/vimrc
ADD env/login_screen /root/.login_screen
ADD env/centos/vim.sh /etc/profile.d/vim.sh
ADD requirements.txt /root/requirements.txt

RUN yum update -y && \
    yum install -y iproute curl unzip git tree vim* nodejs python3 && \
    mkdir -p /etc/vim/backup && \
    mkdir -p /etc/vim/undo && \
    npm install -g @angular/cli && \
    pip3 install -r requirements.txt && \
    rm anaconda-ks.cfg anaconda-post.log original-ks.cfg requirements.txt && \
    git clone $url
    
WORKDIR /root/simpleweb
