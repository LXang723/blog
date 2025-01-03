import{_ as l,c as i,b as s,f as a,d as t,a as r,o,r as p}from"./app-sxChGtp2.js";const d={},c={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"},u={href:"https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://ndpsoftware.com/git-cheatsheet.html#loc=stash;",target:"_blank",rel:"noopener noreferrer"},m={href:"https://git-scm.com/docs/git#_git_commands",target:"_blank",rel:"noopener noreferrer"},b={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/progit/progit2-zh/releases",target:"_blank",rel:"noopener noreferrer"},f={href:"https://docs.github.com/zh/get-started/getting-started-with-git/set-up-git",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.geeksforgeeks.org/git-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"};function x(y,e){const n=p("ExternalLinkIcon");return o(),i("div",null,[s("p",null,[s("a",c,[e[0]||(e[0]=a("Git 官方网站")),t(n)])]),s("ul",null,[s("li",null,[s("a",h,[e[1]||(e[1]=a("Reference")),t(n)]),e[5]||(e[5]=s("br",null,null,-1)),e[6]||(e[6]=a(" 快速参考指南：Quick reference guides: ")),s("a",u,[e[2]||(e[2]=a("GitHub Cheat Sheet")),t(n)]),e[7]||(e[7]=a(" | ")),s("a",g,[e[3]||(e[3]=a("Visual Git Cheat Sheet")),t(n)]),e[8]||(e[8]=s("br",null,null,-1)),e[9]||(e[9]=a(" 所有命令的完整列表： ")),s("a",m,[e[4]||(e[4]=a("Complete list of all commands")),t(n)])]),s("li",null,[s("a",b,[e[10]||(e[10]=a("Book")),t(n)]),e[12]||(e[12]=s("br",null,null,-1)),e[13]||(e[13]=a(" 中文版下载：")),s("a",v,[e[11]||(e[11]=a("Releases · progit/progit2-zh: Pro Git 2nd Edition")),t(n)])])]),s("p",null,[s("a",f,[e[14]||(e[14]=a("GitHub 文档")),t(n)]),e[16]||(e[16]=s("br",null,null,-1)),s("a",k,[e[15]||(e[15]=a("GeeksforGeeks Git Cheat Sheet")),t(n)])]),e[17]||(e[17]=r(`<h2 id="设置-git" tabindex="-1"><a class="header-anchor" href="#设置-git"><span>设置 Git</span></a></h2><p>对所有本地仓库的用户信息进行配置。<br> 打开Git Bash：</p><h3 id="设置用户名和邮件地址-set-your-username-globally" tabindex="-1"><a class="header-anchor" href="#设置用户名和邮件地址-set-your-username-globally"><span>设置用户名和邮件地址 Set your username globally.</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;yourname&quot;</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;youremail@example.com&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>为一个仓库设置 Git 用户名</p><p>确认设置</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="启用彩色命令行输出" tabindex="-1"><a class="header-anchor" href="#启用彩色命令行输出"><span>启用彩色命令行输出</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui auto</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="启用彩色命令行输出-1" tabindex="-1"><a class="header-anchor" href="#启用彩色命令行输出-1"><span>启用彩色命令行输出</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> <span class="token builtin class-name">help</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="存储配置" tabindex="-1"><a class="header-anchor" href="#存储配置"><span>存储配置</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper store</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库"><span>创建仓库</span></a></h2><h3 id="创建一个新的本地仓库" tabindex="-1"><a class="header-anchor" href="#创建一个新的本地仓库"><span>创建一个新的本地仓库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> init <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>省略 project-name 则在当前目录创建。</p><h3 id="克隆一个远程仓库" tabindex="-1"><a class="header-anchor" href="#克隆一个远程仓库"><span>克隆一个远程仓库</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改 Git 远程仓库地址：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> remote set-url origin <span class="token operator">&lt;</span>新的仓库地址<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> remote set-url origin https://github.com/username/repository.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这样就更新了远程仓库地址。如果你想查看修改后的地址，可以运行：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> remote <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="个人常见问题" tabindex="-1"><a class="header-anchor" href="#个人常见问题"><span>个人常见问题</span></a></h2><p>fatal: unable to access &#39;xxx&#39;: OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 0</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy </span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>fatal: unable to access &#39;xxx&#39;: Failed to connect to github.com port 443 after 21045 ms: Could not connect to server</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy <span class="token number">127.0</span>.0.1:10088</span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy <span class="token number">127.0</span>.0.1:10088</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置 -&gt; 网络和Internet -&gt; 代理</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> pull lxang723/lxang723_repo:git-cheatsheet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,32))])}const G=l(d,[["render",x],["__file","git-cheat-sheet.html.vue"]]),j=JSON.parse('{"path":"/blogs/tools/git/git-cheat-sheet.html","title":"Git 命令备忘单","lang":"en-US","frontmatter":{"title":"Git 命令备忘单","date":"2019-04-09T00:00:00.000Z","tags":["Git"],"categories":["Tools"]},"headers":[{"level":2,"title":"设置 Git","slug":"设置-git","link":"#设置-git","children":[{"level":3,"title":"设置用户名和邮件地址 Set your username globally.","slug":"设置用户名和邮件地址-set-your-username-globally","link":"#设置用户名和邮件地址-set-your-username-globally","children":[]},{"level":3,"title":"启用彩色命令行输出","slug":"启用彩色命令行输出","link":"#启用彩色命令行输出","children":[]},{"level":3,"title":"启用彩色命令行输出","slug":"启用彩色命令行输出-1","link":"#启用彩色命令行输出-1","children":[]},{"level":3,"title":"存储配置","slug":"存储配置","link":"#存储配置","children":[]}]},{"level":2,"title":"创建仓库","slug":"创建仓库","link":"#创建仓库","children":[{"level":3,"title":"创建一个新的本地仓库","slug":"创建一个新的本地仓库","link":"#创建一个新的本地仓库","children":[]},{"level":3,"title":"克隆一个远程仓库","slug":"克隆一个远程仓库","link":"#克隆一个远程仓库","children":[]}]},{"level":2,"title":"个人常见问题","slug":"个人常见问题","link":"#个人常见问题","children":[]}],"git":{"createdTime":1735941517000,"updatedTime":1735941517000,"contributors":[{"name":"柒月廿三","email":"lxang723@163.com","commits":1}]},"filePathRelative":"blogs/tools/git/git-cheat-sheet.md"}');export{G as comp,j as data};