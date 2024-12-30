import{_ as o,c as i,a as s,b as r,f as n,d as t,o as d,r as p}from"./app-T2_-3ysr.js";const a="/blog/assets/docker-windows-JHs09D1w.png",u="/blog/assets/docker-hyper-v-BAzO9otE.png",h={},g={href:"https://www.cnblogs.com/qfl-blog/p/18200575",target:"_blank",rel:"noopener noreferrer"},w={href:"https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/about/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#check-requirements",target:"_blank",rel:"noopener noreferrer"},k={href:"https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/reference/hyper-v-requirements",target:"_blank",rel:"noopener noreferrer"},W={href:"https://docs.docker.com/desktop/setup/install/windows-install/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.docker.com/get-started/introduction/get-docker-desktop/",target:"_blank",rel:"noopener noreferrer"};function v(x,l){const e=p("ExternalLinkIcon");return d(),i("div",null,[l[19]||(l[19]=s('<h2 id="_1-hyper-v-和-wsl" tabindex="-1"><a class="header-anchor" href="#_1-hyper-v-和-wsl"><span>1. Hyper-V 和 WSL</span></a></h2><p>Hyper-V 和 WSL（Windows Subsystem for Linux）都是 Windows 系统提供的虚拟化和开发工具，但它们的功能和用途有所不同。以下是它们的核心特点及关系：</p><hr><h3 id="hyper-v-windows-的虚拟化平台" tabindex="-1"><a class="header-anchor" href="#hyper-v-windows-的虚拟化平台"><span><strong>Hyper-V：Windows 的虚拟化平台</strong></span></a></h3><ol><li><p><strong>功能</strong>：</p><ul><li>Hyper-V 是微软的虚拟化解决方案，允许用户运行完整的虚拟机（VM）。虚拟机是独立于主机系统运行的，具备完整的操作系统和硬件抽象。</li><li>支持多种操作系统，比如 Windows、Linux 以及其他兼容的 OS。</li><li>提供高性能虚拟化，适合测试、开发和生产环境。</li></ul></li><li><p><strong>应用场景</strong>：</p><ul><li>创建隔离的测试环境。</li><li>部署不同版本的操作系统或软件堆栈。</li><li>运行需要完整硬件虚拟化支持的应用，比如 Docker Desktop 的 Hyper-V 模式。</li></ul></li><li><p><strong>要求</strong>：</p><ul><li>需要硬件支持（如 CPU 虚拟化功能：Intel VT-x 或 AMD-V）。</li><li>必须在 Windows 专业版、企业版或教育版中运行。</li></ul></li></ol><hr><h3 id="wsl-为开发者优化的-linux-环境" tabindex="-1"><a class="header-anchor" href="#wsl-为开发者优化的-linux-环境"><span><strong>WSL：为开发者优化的 Linux 环境</strong></span></a></h3><ol><li><p><strong>功能</strong>：</p><ul><li>WSL 是微软为开发者推出的轻量级 Linux 子系统，旨在让用户直接在 Windows 上运行 Linux 环境。</li><li>WSL 2 引入了轻量级虚拟化，运行的是完整的 Linux 内核，但其启动速度和资源占用比传统虚拟机小得多。</li><li>支持安装多个 Linux 发行版（如 Ubuntu、Debian、Fedora 等）。</li></ul></li><li><p><strong>应用场景</strong>：</p><ul><li>在 Windows 上直接运行 Linux 命令行工具和应用（如 Git、Bash 脚本、Python 环境）。</li><li>在开发中跨平台操作（例如开发运行在 Linux 上的服务器或容器应用）。</li><li>与 Docker Desktop 配合使用（WSL 2 是其默认后端）。</li></ul></li><li><p><strong>要求</strong>：</p><ul><li>Windows 10（2004 版及以上）或 Windows 11。</li><li>Windows 专业版和家庭版都支持 WSL。</li></ul></li></ol><hr><h3 id="两者的关系与区别" tabindex="-1"><a class="header-anchor" href="#两者的关系与区别"><span><strong>两者的关系与区别</strong></span></a></h3><ol><li><p><strong>关系</strong>：</p><ul><li><strong>Hyper-V 是 WSL 2 的底层支持技术</strong>：WSL 2 使用轻量级的虚拟化技术，它依赖 Hyper-V 的虚拟化功能来运行 Linux 内核。</li><li>如果系统启用了 Hyper-V，则可以无缝支持 WSL 2 的运行。</li></ul></li><li><p><strong>区别</strong>：</p><table><thead><tr><th>特性</th><th>Hyper-V</th><th>WSL</th></tr></thead><tbody><tr><td>类型</td><td>完整虚拟机</td><td>轻量级 Linux 子系统</td></tr><tr><td>系统隔离</td><td>完全隔离的虚拟机环境</td><td>与 Windows 系统深度集成</td></tr><tr><td>资源需求</td><td>较高，需要为 VM 分配内存和 CPU</td><td>较低，共享系统资源</td></tr><tr><td>适用场景</td><td>全功能虚拟化需求</td><td>开发者运行 Linux 工具或测试</td></tr></tbody></table></li></ol><hr><h3 id="选用建议" tabindex="-1"><a class="header-anchor" href="#选用建议"><span><strong>选用建议</strong></span></a></h3><ul><li><p><strong>使用 Hyper-V</strong>：</p><ul><li>如果需要运行完整的虚拟机环境，模拟复杂网络架构，或部署生产级应用。</li><li>对需要模拟跨操作系统的多机环境（例如 Windows 和 Linux）的开发者。</li></ul></li><li><p><strong>使用 WSL</strong>：</p><ul><li>如果主要在 Windows 上开发，且需要频繁使用 Linux 工具或环境。</li><li>对资源占用敏感，或不需要完整虚拟化的开发者。</li></ul></li></ul><hr><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span><strong>常见问题</strong></span></a></h3><ol><li><p><strong>WSL 和 Hyper-V 是否可以共存？</strong></p><ul><li>是的，WSL 2 依赖 Hyper-V 提供底层支持，但这并不意味着必须启用完整的 Hyper-V 功能。Windows 会自动配置所需的虚拟化支持。</li></ul></li><li><p><strong>Hyper-V 是否会影响其他虚拟化工具？</strong></p><ul><li>Hyper-V 会与某些虚拟化软件（如 VMware Workstation 或 VirtualBox 的旧版本）产生冲突。如果需要运行这些工具，可以考虑关闭 Hyper-V 或启用兼容模式。</li></ul></li></ol><h2 id="_2-启用-hyper-v" tabindex="-1"><a class="header-anchor" href="#_2-启用-hyper-v"><span>2. 启用 Hyper-V</span></a></h2><h3 id="_2-1-设置中搜索-启用或关闭-windows-功能" tabindex="-1"><a class="header-anchor" href="#_2-1-设置中搜索-启用或关闭-windows-功能"><span>2.1. 设置中搜索 <strong>启用或关闭 Windows 功能</strong></span></a></h3><p><img src="'+a+'" alt="docker-windows"></p><h3 id="_2-2-勾选-hyper-v" tabindex="-1"><a class="header-anchor" href="#_2-2-勾选-hyper-v"><span>2.2. 勾选 Hyper-V</span></a></h3><p><img src="'+u+'" alt="docker-hyper-v"></p><p>注：Windows家庭版请升级至专业版。</p>',23)),r("p",null,[l[6]||(l[6]=r("strong",null,"推荐链接",-1)),l[7]||(l[7]=r("br",null,null,-1)),l[8]||(l[8]=n(" 博客园大佬")),l[9]||(l[9]=r("br",null,null,-1)),r("a",g,[l[0]||(l[0]=n("DockerDesktop安装指南以及Windows下WSL2和 Hyper-V相关问题追查")),t(e)]),l[10]||(l[10]=r("br",null,null,-1)),l[11]||(l[11]=n(" Microsoft 文档")),l[12]||(l[12]=r("br",null,null,-1)),r("a",w,[l[1]||(l[1]=n("Windows 上的 Hyper-V 简介")),t(e)]),l[13]||(l[13]=r("br",null,null,-1)),r("a",y,[l[2]||(l[2]=n("在 Windows 上启用 Hyper-V")),t(e)]),l[14]||(l[14]=r("br",null,null,-1)),r("a",k,[l[3]||(l[3]=n("Windows 11 Hyper-V 系统要求")),t(e)]),l[15]||(l[15]=r("br",null,null,-1)),l[16]||(l[16]=n(" Docker 官方文档")),l[17]||(l[17]=r("br",null,null,-1)),r("a",W,[l[4]||(l[4]=n("Install Docker Desktop on Windows")),t(e)]),l[18]||(l[18]=r("br",null,null,-1)),r("a",b,[l[5]||(l[5]=n("Get Docker Desktop")),t(e)])])])}const V=o(h,[["render",v],["__file","docker.html.vue"]]),m=JSON.parse('{"path":"/blogs/tools/docker/docker.html","title":"Windows11 安装 Docker","lang":"en-US","frontmatter":{"title":"Windows11 安装 Docker","description":"description","date":"2019-04-09T00:00:00.000Z","tags":["Docker"],"categories":["Tools"]},"headers":[{"level":2,"title":"1. Hyper-V 和 WSL","slug":"_1-hyper-v-和-wsl","link":"#_1-hyper-v-和-wsl","children":[{"level":3,"title":"Hyper-V：Windows 的虚拟化平台","slug":"hyper-v-windows-的虚拟化平台","link":"#hyper-v-windows-的虚拟化平台","children":[]},{"level":3,"title":"WSL：为开发者优化的 Linux 环境","slug":"wsl-为开发者优化的-linux-环境","link":"#wsl-为开发者优化的-linux-环境","children":[]},{"level":3,"title":"两者的关系与区别","slug":"两者的关系与区别","link":"#两者的关系与区别","children":[]},{"level":3,"title":"选用建议","slug":"选用建议","link":"#选用建议","children":[]},{"level":3,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}]},{"level":2,"title":"2. 启用 Hyper-V","slug":"_2-启用-hyper-v","link":"#_2-启用-hyper-v","children":[{"level":3,"title":"2.1. 设置中搜索 启用或关闭 Windows 功能","slug":"_2-1-设置中搜索-启用或关闭-windows-功能","link":"#_2-1-设置中搜索-启用或关闭-windows-功能","children":[]},{"level":3,"title":"2.2. 勾选 Hyper-V","slug":"_2-2-勾选-hyper-v","link":"#_2-2-勾选-hyper-v","children":[]}]}],"git":{"createdTime":1735529836000,"updatedTime":1735529836000,"contributors":[{"name":"lxang723","email":"lxang723@163.com","commits":1}]},"filePathRelative":"blogs/tools/docker/docker.md"}');export{V as comp,m as data};
