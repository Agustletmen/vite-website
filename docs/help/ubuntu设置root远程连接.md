```shell
vim /etc/ssh/sshd_config

PermitRootLogin yes			# 允许root直接登录
PermitEmptyPasswords no		# 因为设置了root密码，所以需要修改为no

systemctl restart ssh
```