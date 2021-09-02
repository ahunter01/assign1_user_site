# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrant file for setting up three virtual machines: a user vm, a admin vm, and a database vm.
Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"

  # Setting up the user vm for the customer website.
	config.vm.define "userserver" do |userserver|

	  userserver.vm.hostname = "userserver"

		userserver.vm.network "forwarded_port", guest: 80, host: 8081, host_ip: "127.0.0.1"

		userserver.vm.network "private_network", ip: "192.168.2.11"

		userserver.vm.synced_folder ".", "/vagrant", owner: "vagrant", group: "vagrant", mount_options: ["dmode=775,fmode=777"]

		userserver.vm.provision :shell, path: "userserver_setup.sh"

	end

  # Setting up the admin vm for the staff website.
  config.vm.define "adminserver" do |adminserver|

	  adminserver.vm.hostname = "adminserver"

		adminserver.vm.network "forwarded_port", guest: 80, host: 8082, host_ip: "127.0.0.1"

		adminserver.vm.network "private_network", ip: "192.168.2.12"

		adminserver.vm.synced_folder ".", "/vagrant", owner: "vagrant", group: "vagrant", mount_options: ["dmode=775,fmode=777"]

		adminserver.vm.provision :shell, path: "adminserver_setup.sh"

	end

  # Setting up the database vm for hosting the database that stores the clothing items
  config.vm.define "dbserver" do |dbserver|

	  dbserver.vm.hostname = "dbserver"

		dbserver.vm.network "private_network", ip: "192.168.2.13"

		dbserver.vm.synced_folder ".", "/vagrant", owner: "vagrant", group: "vagrant", mount_options: ["dmode=775,fmode=777"]

		dbserver.vm.provision :shell, path: "dbserver_setup.sh"

	end

end