import{_ as o,c as p,b as s,f as e,d as t,a as l,o as c,r as i}from"./app-T2_-3ysr.js";const r={},u={href:"https://docs.spring.io/spring-boot/docs/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://docs.spring.io/spring-boot/docs/",target:"_blank",rel:"noopener noreferrer"};function k(m,n){const a=i("ExternalLinkIcon");return c(),p("div",null,[n[2]||(n[2]=s("p",null,[s("img",{src:"https://img.shields.io/badge/Spring_Framework_Documentation-5.3.39-brightgreen.svg?style=for-the-badge",alt:"Spring Framework Documentation"})],-1)),s("p",null,[s("a",u,[n[0]||(n[0]=e("spring-framework 文档")),t(a)])]),s("p",null,[s("a",d,[n[1]||(n[1]=e("spring-boot 文档")),t(a)])]),n[3]||(n[3]=l(`<p>This chapter covers Spring’s Inversion of Control (IoC) container.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">DefaultListableBeanFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultListableBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">XmlBeanDefinitionReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XmlBeanDefinitionReader</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">reader<span class="token punctuation">.</span><span class="token function">loadBeanDefinitions</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileSystemResource</span><span class="token punctuation">(</span><span class="token string">&quot;beans.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// bring in some property values from a Properties file</span></span>
<span class="line"><span class="token class-name">PropertySourcesPlaceholderConfigurer</span> cfg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PropertySourcesPlaceholderConfigurer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">cfg<span class="token punctuation">.</span><span class="token function">setLocation</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileSystemResource</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// now actually do the replacement</span></span>
<span class="line">cfg<span class="token punctuation">.</span><span class="token function">postProcessBeanFactory</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const v=o(r,[["render",k],["__file","ioc.html.vue"]]),f=JSON.parse('{"path":"/blogs/spring-boot/ioc.html","title":"IoC","lang":"en-US","frontmatter":{"title":"IoC","date":"2019-04-09T00:00:00.000Z","categories":["SpringBoot"]},"headers":[],"git":{"createdTime":1735529836000,"updatedTime":1735529836000,"contributors":[{"name":"lxang723","email":"lxang723@163.com","commits":1}]},"filePathRelative":"blogs/spring-boot/ioc.md"}');export{v as comp,f as data};
