(function () {
  var DATA = [
    ["Linux basics", "What is Linux?", "Linux is a free kernel. The kernel is the main part of the system that connects the hardware with the programs."],
    ["Linux basics", "What is the difference between a kernel and a distribution?", "The kernel is the engine. A distribution is the full car: kernel + tools + installer + package manager."],
    ["Linux basics", "Who made Linux and which licence does it use?", "Linus Torvalds made it in 1991, and it uses the GPL v2 licence."],
    ["Linux basics", "What does open source mean?", "The code is public, so anyone can read it, change it and share it."],
    ["Linux basics", "Is Linux the same as Unix?", "No. Linux is Unix-like. It works like Unix but was written from scratch."],
    ["Linux basics", "What is the difference between a shell and a terminal?", "The terminal is the window. The shell (bash) is the program inside it that runs my commands."],
    ["Linux basics", "Which shell is the default in RHEL?", "Bash. The sh command also points to bash."],
    ["Linux basics", "How do you check the kernel version?", "Run <code>uname -r</code>."],

    ["RHEL and distros", "What is RHEL?", "RHEL is Red Hat's paid Linux for servers. It is stable, secure and supported for up to 10 years."],
    ["RHEL and distros", "How are Fedora, CentOS Stream and RHEL connected?", "Fedora gets new features first, CentOS Stream is the preview of the next RHEL, and RHEL is the stable final product."],
    ["RHEL and distros", "What are Rocky Linux and AlmaLinux?", "They are free copies of RHEL that work the same way."],
    ["RHEL and distros", "Which package type and tool does RHEL use?", "RHEL uses .rpm packages and installs them with dnf."],
    ["RHEL and distros", "Which package type does Ubuntu use?", "Ubuntu uses .deb packages and installs them with apt."],
    ["RHEL and distros", "Which distro is Kali Linux based on?", "Debian. Kali is used for security testing."],
    ["RHEL and distros", "What is new in RHEL 10?", "It has GNOME 47 on Wayland, a terminal AI helper called Lightspeed, Flatpak apps and image mode. It needs an x86-64-v3 CPU."],

    ["Boot process", "Explain the boot process in simple steps.", "Power on, firmware (BIOS/UEFI) checks the hardware, GRUB loads the kernel, the kernel starts, systemd starts the services, then the login screen appears."],
    ["Boot process", "What is the difference between BIOS and UEFI?", "BIOS is the old firmware and uses MBR. UEFI is the new firmware and uses GPT."],
    ["Boot process", "What does GRUB do?", "GRUB is the bootloader. It shows the boot menu and loads the kernel."],
    ["Boot process", "What is initramfs?", "A small temporary file system that helps the kernel find the real disk."],
    ["Boot process", "What is systemd?", "It is the first program the kernel starts, and it starts all the other services."],
    ["Boot process", "How do you reset a lost root password?", "At the GRUB menu, add <code>rd.break</code> to the kernel line."],
    ["Boot process", "What is rescue mode?", "It is a repair mode started from the installer. My system is at /mnt/sysimage, and I use chroot to work inside it."],
    ["Boot process", "What is kdump?", "If the kernel crashes, kdump saves a copy of memory (called vmcore) so we can find the reason."],

    ["Installation and storage", "What is Anaconda?", "It is the installer program of RHEL and Fedora."],
    ["Installation and storage", "What are the software selection choices?", "Server with GUI, Server, Minimal Install and Workstation."],
    ["Installation and storage", "What is Kickstart?", "A file that answers all the installer questions by itself, so installation needs no one to click."],
    ["Installation and storage", "Where is my install choice saved after installation?", "In /root/anaconda-ks.cfg. I can use it as a Kickstart template."],
    ["Installation and storage", "What is the difference between MBR and GPT?", "MBR supports up to 2 TB and 4 main partitions. GPT supports very big disks and 128 partitions."],
    ["Installation and storage", "What is LVM?", "LVM makes storage flexible. Disks (PV) join into one pool (VG), and I cut resizable slices (LV) from it."],
    ["Installation and storage", "Why use LVM instead of normal partitions?", "I can make a volume bigger later without reinstalling."],
    ["Installation and storage", "Which partitions stay outside LVM?", "/boot and the EFI partition."],
    ["Installation and storage", "What is the default file system in RHEL?", "XFS. It can grow but it cannot shrink."],
    ["Installation and storage", "What is swap?", "Disk space that works as extra memory when RAM is full."],
    ["Installation and storage", "Why keep /home and /var on separate partitions?", "Big logs cannot fill the main disk, and user files stay safe if I reinstall /."],
    ["Installation and storage", "What do /dev/sda, /dev/vda and /dev/nvme0n1 mean?", "A SATA/SCSI disk, a virtio disk and an NVMe disk."],

    ["Networking and lab", "What are the VMware network modes?", "NAT shares my PC's internet. Bridged makes the VM a separate device on my real network. Host-only is a private network with no internet."],
    ["Networking and lab", "Who gives the VM an IP in NAT mode?", "VMware's own virtual DHCP, not my router."],
    ["Networking and lab", "Who gives the VM an IP in Bridged mode?", "My real router."],
    ["Networking and lab", "Does a VM get a public IP?", "No. It always gets a private IP. The internet only sees my router's public IP."],
    ["Networking and lab", "What is DHCP?", "A service that gives IP addresses automatically."],
    ["Networking and lab", "How do you set a fixed IP?", "Use <code>nmcli</code> to add a connection with a manual IPv4 address."],
    ["Networking and lab", "How do you log in to another server without typing a password?", "Make an SSH key with ssh-keygen and send it with ssh-copy-id."],
    ["Networking and lab", "Can root log in over SSH in RHEL 10?", "Not with a password. I log in as a normal user and use sudo."],
    ["Networking and lab", "How do you give a user admin rights?", "Add the user to the wheel group so they can use sudo."],
    ["Networking and lab", "Why take VM snapshots?", "A snapshot is an undo button. If I break something, I go back to the saved state."],

    ["Real situations", "SITUATION: The screen is black while the installer starts. What do you do?", "Choose Troubleshooting, then \"Install in basic graphics mode\"."],
    ["Real situations", "SITUATION: A user forgot the root password. What do you do?", "Reboot, press <code>e</code> at the GRUB menu, add <code>rd.break</code> to the kernel line, and reset the password."],
    ["Real situations", "SITUATION: The server will not boot and I need to fix a file. What do you do?", "Boot the installer in rescue mode, then use <code>chroot /mnt/sysimage</code> to work inside my system."],
    ["Real situations", "SITUATION: /home is almost full. The server uses LVM. What do you do?", "Make the /home logical volume bigger. This works because LVM is flexible."],
    ["Real situations", "SITUATION: Logs filled the whole disk and the server stopped. How could this be avoided?", "Keep /var on its own partition, so logs cannot fill the root disk."],
    ["Real situations", "SITUATION: My VM needs internet only. Which network mode?", "NAT."],
    ["Real situations", "SITUATION: My phone and other PCs must reach the VM. Which network mode?", "Bridged, because the VM becomes a real device on the network."],
    ["Real situations", "SITUATION: I want a safe lab with no internet. Which network mode?", "Host-only."],
    ["Real situations", "SITUATION: I must install 50 servers in the same way. What do you use?", "A Kickstart file."],
    ["Real situations", "SITUATION: The server crashed (kernel panic) and my manager wants the reason. What do you check?", "The vmcore saved by kdump, in /var/crash."],
    ["Real situations", "SITUATION: How do you check if the VM has a public or private IP?", "Run <code>ip a</code> for the VM's private IP and <code>curl ifconfig.me</code> for the public IP."],
    ["Real situations", "SITUATION: I cannot log in as root over SSH. What is wrong?", "Nothing is wrong. RHEL blocks root password login by default. I log in as a normal user and use sudo."],
    ["Real situations", "SITUATION: I want to practise a risky change. What do I do first?", "Take a snapshot, so I can restore it if something breaks."],
    ["Real situations", "SITUATION: I cloned a VM and both machines have the same name and IP. What do I do?", "Give the clone its own hostname, IP and a new machine ID."],
    ["Real situations", "SITUATION: I need to install a program on RHEL. How?", "Use <code>dnf install</code> followed by the package name."],
    ["Real situations", "SITUATION: I made an XFS partition too big and want to shrink it. Can I?", "No. XFS can only grow. I would need to back up, recreate it smaller and restore."],
    ["Real situations", "SITUATION: RHEL 10 VM will not start and shows a CPU error. Why?", "RHEL 10 needs an x86-64-v3 CPU. I use a newer VMware hardware version or a newer PC."],
    ["Real situations", "SITUATION: I need to change the boot menu settings permanently. Where?", "Edit /etc/default/grub, then run grub2-mkconfig to apply it."]
  ];

  var css = '' +
    '.qa-open-wrap{text-align:center;margin:10px 0 28px}' +
    '.qa-open-btn{display:inline-flex;align-items:center;gap:10px;padding:14px 32px;background:var(--bg-card);border:1px solid var(--accent-red);border-radius:var(--radius-md);color:var(--text-primary);font-size:.95rem;font-weight:700;cursor:pointer;transition:all .2s;font-family:inherit}' +
    '.qa-open-btn:hover{background:rgba(238,0,0,.1);box-shadow:var(--shadow-glow)}' +
    '#qaPanel{display:none;max-width:920px;margin:0 auto;padding:0 24px 40px}' +
    '#qaPanel.open{display:block}' +
    '.qa-box{background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:28px}' +
    '.qa-head{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--border-color)}' +
    '.qa-head h2{font-size:1.25rem;font-weight:700}' +
    '.qa-head small{display:block;color:var(--text-muted);font-size:.78rem;font-weight:400;margin-top:2px}' +
    '.qa-tools{display:flex;flex-wrap:wrap;gap:8px}' +
    '.qa-tools button,.qa-reveal{padding:7px 14px;background:var(--bg-primary);border:1px solid var(--border-light);border-radius:var(--radius-sm);color:var(--text-secondary);font-size:.8rem;cursor:pointer;font-family:inherit;transition:all .2s}' +
    '.qa-tools button:hover,.qa-reveal:hover{border-color:var(--accent-red);color:var(--accent-red)}' +
    '.qa-search{width:100%;padding:10px 14px;margin-bottom:6px;background:var(--bg-primary);border:1px solid var(--border-light);border-radius:var(--radius-sm);color:var(--text-primary);font-size:.88rem;font-family:inherit}' +
    '.qa-search:focus{outline:none;border-color:var(--accent-red)}' +
    '.qa-cat{font-size:.75rem;color:var(--accent-red);text-transform:uppercase;letter-spacing:2px;font-weight:700;margin:26px 0 10px}' +
    '.qa-item{background:var(--bg-primary);border:1px solid var(--border-color);border-radius:var(--radius-md);padding:14px 18px;margin-bottom:10px}' +
    '.qa-q{display:flex;gap:12px;align-items:flex-start;justify-content:space-between}' +
    '.qa-q span{font-size:.92rem;font-weight:600;color:var(--text-primary);line-height:1.5}' +
    '.qa-q b{color:var(--accent-cyan);margin-right:6px}' +
    '.qa-reveal{flex-shrink:0;white-space:nowrap}' +
    '.qa-a{display:none;margin-top:12px;padding:12px 14px;background:rgba(34,197,94,.07);border:1px solid rgba(34,197,94,.2);border-radius:var(--radius-sm);color:var(--text-secondary);font-size:.9rem;line-height:1.6}' +
    '.qa-item.show .qa-a{display:block}' +
    '.qa-item.hide{display:none}' +
    '.qa-count{font-size:.78rem;color:var(--text-muted);margin:8px 0 0}' +
    '@media(max-width:600px){.qa-q{flex-direction:column}.qa-box{padding:18px 14px}}';

  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  // panel
  var panel = document.createElement('div');
  panel.id = 'qaPanel';
  var box = document.createElement('div');
  box.className = 'qa-box';
  box.innerHTML =
    '<div class="qa-head"><h2>❓ Questions &amp; Answers<small>Tap "Show answer" to check yourself. Each answer is one short line you can say aloud.</small></h2>' +
    '<div class="qa-tools"><button type="button" id="qaShowAll">Show all answers</button><button type="button" id="qaHideAll">Hide all answers</button><button type="button" id="qaClose">Close ✕</button></div></div>' +
    '<input class="qa-search" id="qaSearch" type="search" placeholder="Search questions...">' +
    '<div class="qa-count" id="qaCount"></div><div id="qaList"></div>';
  panel.appendChild(box);

  var list = box.querySelector('#qaList');
  var lastCat = '';
  var n = 0;
  var items = [];
  DATA.forEach(function (d) {
    if (d[0] !== lastCat) {
      lastCat = d[0];
      var h = document.createElement('div');
      h.className = 'qa-cat';
      h.textContent = lastCat;
      list.appendChild(h);
    }
    n++;
    var it = document.createElement('div');
    it.className = 'qa-item';
    it.innerHTML =
      '<div class="qa-q"><span><b>Q' + n + '.</b>' + d[1] + '</span><button type="button" class="qa-reveal">Show answer</button></div>' +
      '<div class="qa-a">' + d[2] + '</div>';
    var btn = it.querySelector('.qa-reveal');
    btn.addEventListener('click', function () {
      var shown = it.classList.toggle('show');
      btn.textContent = shown ? 'Hide answer' : 'Show answer';
    });
    list.appendChild(it);
    items.push({ el: it, btn: btn, text: (d[1] + ' ' + d[2]).toLowerCase(), cat: d[0] });
  });

  function setAll(show) {
    items.forEach(function (o) {
      o.el.classList.toggle('show', show);
      o.btn.textContent = show ? 'Hide answer' : 'Show answer';
    });
  }
  function updateCount(visible) {
    box.querySelector('#qaCount').textContent = visible + ' of ' + items.length + ' questions';
  }
  updateCount(items.length);

  box.querySelector('#qaShowAll').addEventListener('click', function () { setAll(true); });
  box.querySelector('#qaHideAll').addEventListener('click', function () { setAll(false); });
  box.querySelector('#qaSearch').addEventListener('input', function (e) {
    var q = e.target.value.trim().toLowerCase();
    var visible = 0;
    items.forEach(function (o) {
      var match = !q || o.text.indexOf(q) !== -1;
      o.el.classList.toggle('hide', !match);
      if (match) visible++;
    });
    var cats = list.querySelectorAll('.qa-cat');
    cats.forEach(function (c) {
      var next = c.nextElementSibling, any = false;
      while (next && !next.classList.contains('qa-cat')) {
        if (!next.classList.contains('hide')) any = true;
        next = next.nextElementSibling;
      }
      c.style.display = any ? '' : 'none';
    });
    updateCount(visible);
  });

  function toggle(open) {
    var isOpen = open === undefined ? !panel.classList.contains('open') : open;
    panel.classList.toggle('open', isOpen);
    openBtn.textContent = isOpen ? '❓ Hide Questions & Answers' : '❓ Open Questions & Answers';
    if (isOpen) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  box.querySelector('#qaClose').addEventListener('click', function () {
    toggle(false);
    openWrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // button
  var openWrap = document.createElement('div');
  openWrap.className = 'qa-open-wrap';
  var openBtn = document.createElement('button');
  openBtn.type = 'button';
  openBtn.className = 'qa-open-btn';
  openBtn.textContent = '❓ Open Questions & Answers';
  openBtn.addEventListener('click', function () { toggle(); });
  openWrap.appendChild(openBtn);

  var footer = document.querySelector('.chapter-footer');
  var content = document.querySelector('.chapter-content');
  if (content) {
    content.appendChild(openWrap);
    content.parentNode.insertBefore(panel, footer || content.nextSibling);
  } else {
    document.body.appendChild(openWrap);
    document.body.appendChild(panel);
  }
})();