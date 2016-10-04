# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure(2) do |config|

    #config.vm.box = "centos67"
    config.vm.box = "CentOS67-httpd24-php56"
    config.vm.network "private_network", ip: "192.168.33.21"
    #config.vm.network "public_network"
    config.vm.hostname = "centos"

    config.vm.synced_folder "www", "/var/www/html", :mount_options => ["dmode=777", "fmode=666"]
    #config.vm.provision :shell, :inline => "ln -s /home/ad102m0tyl/html /var/www/public"

    config.vm.provider "virtualbox" do |vb|
      vb.customize ["modifyvm", :id, "--memory", "1024"]
    end

end
