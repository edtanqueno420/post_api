nest generate module basic
nest generate controller basic
nest generate service basic

#GIT_SSH_COMMAND='ssh -i ~/.ssh/github_deploy' git clone git@github.com:edtanqueno420/post_api.git /opt/post_api



pm2 start dist/main.js --name nestjs-posts-api