App.php={nl2br:function(a){var b=(is_xhtml||typeof is_xhtml==="undefined")?"":"<br>";return(a+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+b+"$2")},lcfirst:function(a){var b=a.charAt(0).toLowerCase();return b+a.substr(1)},ltrim:function(a,c){c=!c?" \\s\u00A0":(c+"").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"$1");var b=new RegExp("^["+c+"]+","g");return(a+"").replace(b,"")},rtrim:function(a,c){c=!c?" \\s\u00A0":(c+"").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"\\$1");var b=new RegExp("["+c+"]+$","g");return(a+"").replace(b,"")},repeat:function(a,b){return new Array(b+1).join(a)},str_replace:function(t,c,h,m){var g=0,e=0,p="",l="",d=0,o=0,k=[].concat(t),a=[].concat(c),q=h,b=Object.prototype.toString.call(a)==="[object Array]",n=Object.prototype.toString.call(q)==="[object Array]";q=[].concat(q);if(m){h.window[m]=0}for(g=0,d=q.length;g<d;g++){if(q[g]===""){continue}for(e=0,o=k.length;e<o;e++){p=q[g]+"";l=b?(a[e]!==undefined?a[e]:""):a[0];q[g]=(p).split(k[e]).join(l);if(m&&q[g]!==p){h.window[m]+=(p.length-q[g].length)/k[e].length}}}return n?q:q[0]},str_word_count:function(a,r,q){var s=a.length,l=a,j=q&&q.length,m="",e="",p=0,t="",b=[],d=0,g={},k=0,f="",h=false;var o=function(c){return(c+"").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g,"\\$1")},n=function(x,c){var w=x.charCodeAt(c);if(w<55296||w>57343){return x.charAt(c)}if(55296<=w&&w<=56319){if(x.length<=(c+1)){throw"High surrogate without following low surrogate"}var u=x.charCodeAt(c+1);if(56320>u||u>57343){throw"High surrogate without following low surrogate"}return x.charAt(c)+x.charAt(c+1)}if(c===0){throw"Low surrogate without preceding high surrogate"}var v=x.charCodeAt(c-1);if(55296>v||v>56319){throw"Low surrogate without preceding high surrogate"}return false};if(j){f="^("+o(n(q,0));for(p=1;p<j;p++){if((m=n(q,p))===false){continue}f+="|"+o(m)}f+=")$";f=new RegExp(f)}for(p=0;p<s;p++){if((t=n(l,p))===false){continue}h=a.ctype_alpha(t)||(f&&t.search(f)!==-1)||((p!==0&&p!==s-1)&&t==="-")||(p!==0&&t==="'");if(h){if(e===""&&r===2){k=p}e=e+t}if(p===s-1||!h&&e!==""){if(r!==2){b[b.length]=e}else{g[k]=e}e="";d++}}if(!r){return d}else{if(r===1){return b}else{if(r===2){return g}}}throw"You have supplied an incorrect format"},strlen:function(a){var f=a+"";var b=0,c="",d=0;if(!this.php_js||!this.php_js.ini||!this.php_js.ini["unicode.semantics"]||this.php_js.ini["unicode.semantics"].local_value.toLowerCase()!=="on"){return a.length}var e=function(l,g){var k=l.charCodeAt(g);var h="",j="";if(55296<=k&&k<=56319){if(l.length<=(g+1)){throw"High surrogate without following low surrogate"}h=l.charCodeAt(g+1);if(56320>h||h>57343){throw"High surrogate without following low surrogate"}return l.charAt(g)+l.charAt(g+1)}else{if(56320<=k&&k<=57343){if(g===0){throw"Low surrogate without preceding high surrogate"}j=l.charCodeAt(g-1);if(55296>j||j>56319){throw"Low surrogate without preceding high surrogate"}return false}}return l.charAt(g)};for(b=0,d=0;b<f.length;b++){if((c=e(f,b))===false){continue}d++}return d},strpos:function(b,c,d){var a=(b+"").indexOf(c,(d||0));return a===-1?false:a},strtolower:function(a){return(a+"").toLowerCase()},strtoupper:function(a){return(a+"").toUpperCase()},ucwords:function(a){return(a+"").replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g,function(b){return b.toUpperCase()})},ucfirst:function(b){b+="";var a=b.charAt(0).toUpperCase();return a+b.substr(1)},strip_tags:function(a,c){c=(((c||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var b=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,d=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return a.replace(d,"").replace(b,function(f,e){return c.indexOf("<"+e.toLowerCase()+">")>-1?f:""})},sub_str:function(k,a,g){var f=0,c=true,m=0,b=0,j=0,h="";k+="";var e=k.length;this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};switch((this.php_js.ini["unicode.semantics"]&&this.php_js.ini["unicode.semantics"].local_value.toLowerCase())){case"on":for(f=0;f<k.length;f++){if(/[\uD800-\uDBFF]/.test(k.charAt(f))&&/[\uDC00-\uDFFF]/.test(k.charAt(f+1))){c=false;break}}if(!c){if(a<0){for(f=e-1,m=(a+=e);f>=m;f--){if(/[\uDC00-\uDFFF]/.test(k.charAt(f))&&/[\uD800-\uDBFF]/.test(k.charAt(f-1))){a--;m--}}}else{var d=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;while((d.exec(k))!=null){var l=d.lastIndex;if(l-2<a){a++}else{break}}}if(a>=e||a<0){return false}if(g<0){for(f=e-1,b=(e+=g);f>=b;f--){if(/[\uDC00-\uDFFF]/.test(k.charAt(f))&&/[\uD800-\uDBFF]/.test(k.charAt(f-1))){e--;b--}}if(a>e){return false}return k.slice(a,e)}else{j=a+g;for(f=a;f<j;f++){h+=k.charAt(f);if(/[\uD800-\uDBFF]/.test(k.charAt(f))&&/[\uDC00-\uDFFF]/.test(k.charAt(f+1))){j++}}return h}break}case"off":default:if(a<0){a+=e}e=typeof g==="undefined"?e:(g<0?g+e:g+a);return a>=k.length||a<0||a>e?!1:k.slice(a,e)}return undefined},strripos:function(b,c,d){b=(b+"").toLowerCase();c=(c+"").toLowerCase();var a=-1;if(d){a=(b+"").slice(d).lastIndexOf(c);if(a!==-1){a+=d}}else{a=(b+"").lastIndexOf(c)}return a>=0?a:false},strrpos:function(b,c,d){var a=-1;if(d){a=(b+"").slice(d).lastIndexOf(c);if(a!==-1){a+=d}}else{a=(b+"").lastIndexOf(c)}return a>=0?a:false},number_format:function(f,c,i,e){var h=(f+"").replace(/[^0-9+\-Ee.]/g,"");var b=!isFinite(+h)?0:+h,a=!isFinite(+c)?0:Math.abs(c),k=(typeof e==="undefined")?",":e,d=(typeof i==="undefined")?".":i,j="",g=function(o,m){var l=Math.pow(10,m);return""+Math.round(o*l)/l};j=(a?g(b,a):""+Math.round(b)).split(".");if(j[0].length>3){j[0]=j[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,k)}if((j[1]||"").length<a){j[1]=j[1]||"";j[1]+=new Array(a-j[1].length+1).join("0")}return j.join(d)},sha1:function(r){var c=function(w,j){var i=(w<<j)|(w>>>(32-j));return i};var s=function(y){var x="";var w;var j;for(w=7;w>=0;w--){j=(y>>>(w*4))&15;x+=j.toString(16)}return x};var f;var u,t;var b=new Array(80);var l=1732584193;var h=4023233417;var g=2562383102;var e=271733878;var d=3285377520;var q,p,o,n,m;var v;r=this.utf8_encode(r);var a=r.length;var k=[];for(u=0;u<a-3;u+=4){t=r.charCodeAt(u)<<24|r.charCodeAt(u+1)<<16|r.charCodeAt(u+2)<<8|r.charCodeAt(u+3);k.push(t)}switch(a%4){case 0:u=2147483648;break;case 1:u=r.charCodeAt(a-1)<<24|8388608;break;case 2:u=r.charCodeAt(a-2)<<24|r.charCodeAt(a-1)<<16|32768;break;case 3:u=r.charCodeAt(a-3)<<24|r.charCodeAt(a-2)<<16|r.charCodeAt(a-1)<<8|128;break}k.push(u);while((k.length%16)!=14){k.push(0)}k.push(a>>>29);k.push((a<<3)&4294967295);for(f=0;f<k.length;f+=16){for(u=0;u<16;u++){b[u]=k[f+u]}for(u=16;u<=79;u++){b[u]=c(b[u-3]^b[u-8]^b[u-14]^b[u-16],1)}q=l;p=h;o=g;n=e;m=d;for(u=0;u<=19;u++){v=(c(q,5)+((p&o)|(~p&n))+m+b[u]+1518500249)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=20;u<=39;u++){v=(c(q,5)+(p^o^n)+m+b[u]+1859775393)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=40;u<=59;u++){v=(c(q,5)+((p&o)|(p&n)|(o&n))+m+b[u]+2400959708)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=60;u<=79;u++){v=(c(q,5)+(p^o^n)+m+b[u]+3395469782)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}l=(l+q)&4294967295;h=(h+p)&4294967295;g=(g+o)&4294967295;e=(e+n)&4294967295;d=(d+m)&4294967295}v=s(l)+s(h)+s(g)+s(e)+s(d);return v.toLowerCase()},md5:function(C){var D;var w=function(b,a){return(b<<a)|(b>>>(32-a))};var H=function(k,b){var V,a,d,x,c;d=(k&2147483648);x=(b&2147483648);V=(k&1073741824);a=(b&1073741824);c=(k&1073741823)+(b&1073741823);if(V&a){return(c^2147483648^d^x)}if(V|a){if(c&1073741824){return(c^3221225472^d^x)}else{return(c^1073741824^d^x)}}else{return(c^d^x)}};var r=function(a,c,b){return(a&c)|((~a)&b)};var q=function(a,c,b){return(a&b)|(c&(~b))};var p=function(a,c,b){return(a^c^b)};var n=function(a,c,b){return(c^(a|(~b)))};var u=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(r(V,aa,Z),k),Y));return H(w(W,X),V)};var f=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(q(V,aa,Z),k),Y));return H(w(W,X),V)};var F=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(p(V,aa,Z),k),Y));return H(w(W,X),V)};var t=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(n(V,aa,Z),k),Y));return H(w(W,X),V)};var e=function(V){var W;var d=V.length;var c=d+8;var b=(c-(c%64))/64;var x=(b+1)*16;var X=new Array(x-1);var a=0;var k=0;while(k<d){W=(k-(k%4))/4;a=(k%4)*8;X[W]=(X[W]|(V.charCodeAt(k)<<a));k++}W=(k-(k%4))/4;a=(k%4)*8;X[W]=X[W]|(128<<a);X[x-2]=d<<3;X[x-1]=d>>>29;return X};var s=function(d){var a="",b="",k,c;for(c=0;c<=3;c++){k=(d>>>(c*8))&255;b="0"+k.toString(16);a=a+b.substr(b.length-2,2)}return a};var E=[],L,h,G,v,g,U,T,S,R,O=7,M=12,J=17,I=22,B=5,A=9,z=14,y=20,o=4,m=11,l=16,j=23,Q=6,P=10,N=15,K=21;C=this.utf8_encode(C);E=e(C);U=1732584193;T=4023233417;S=2562383102;R=271733878;D=E.length;for(L=0;L<D;L+=16){h=U;G=T;v=S;g=R;U=u(U,T,S,R,E[L+0],O,3614090360);R=u(R,U,T,S,E[L+1],M,3905402710);S=u(S,R,U,T,E[L+2],J,606105819);T=u(T,S,R,U,E[L+3],I,3250441966);U=u(U,T,S,R,E[L+4],O,4118548399);R=u(R,U,T,S,E[L+5],M,1200080426);S=u(S,R,U,T,E[L+6],J,2821735955);T=u(T,S,R,U,E[L+7],I,4249261313);U=u(U,T,S,R,E[L+8],O,1770035416);R=u(R,U,T,S,E[L+9],M,2336552879);S=u(S,R,U,T,E[L+10],J,4294925233);T=u(T,S,R,U,E[L+11],I,2304563134);U=u(U,T,S,R,E[L+12],O,1804603682);R=u(R,U,T,S,E[L+13],M,4254626195);S=u(S,R,U,T,E[L+14],J,2792965006);T=u(T,S,R,U,E[L+15],I,1236535329);U=f(U,T,S,R,E[L+1],B,4129170786);R=f(R,U,T,S,E[L+6],A,3225465664);S=f(S,R,U,T,E[L+11],z,643717713);T=f(T,S,R,U,E[L+0],y,3921069994);U=f(U,T,S,R,E[L+5],B,3593408605);R=f(R,U,T,S,E[L+10],A,38016083);S=f(S,R,U,T,E[L+15],z,3634488961);T=f(T,S,R,U,E[L+4],y,3889429448);U=f(U,T,S,R,E[L+9],B,568446438);R=f(R,U,T,S,E[L+14],A,3275163606);S=f(S,R,U,T,E[L+3],z,4107603335);T=f(T,S,R,U,E[L+8],y,1163531501);U=f(U,T,S,R,E[L+13],B,2850285829);R=f(R,U,T,S,E[L+2],A,4243563512);S=f(S,R,U,T,E[L+7],z,1735328473);T=f(T,S,R,U,E[L+12],y,2368359562);U=F(U,T,S,R,E[L+5],o,4294588738);R=F(R,U,T,S,E[L+8],m,2272392833);S=F(S,R,U,T,E[L+11],l,1839030562);T=F(T,S,R,U,E[L+14],j,4259657740);U=F(U,T,S,R,E[L+1],o,2763975236);R=F(R,U,T,S,E[L+4],m,1272893353);S=F(S,R,U,T,E[L+7],l,4139469664);T=F(T,S,R,U,E[L+10],j,3200236656);U=F(U,T,S,R,E[L+13],o,681279174);R=F(R,U,T,S,E[L+0],m,3936430074);S=F(S,R,U,T,E[L+3],l,3572445317);T=F(T,S,R,U,E[L+6],j,76029189);U=F(U,T,S,R,E[L+9],o,3654602809);R=F(R,U,T,S,E[L+12],m,3873151461);S=F(S,R,U,T,E[L+15],l,530742520);T=F(T,S,R,U,E[L+2],j,3299628645);U=t(U,T,S,R,E[L+0],Q,4096336452);R=t(R,U,T,S,E[L+7],P,1126891415);S=t(S,R,U,T,E[L+14],N,2878612391);T=t(T,S,R,U,E[L+5],K,4237533241);U=t(U,T,S,R,E[L+12],Q,1700485571);R=t(R,U,T,S,E[L+3],P,2399980690);S=t(S,R,U,T,E[L+10],N,4293915773);T=t(T,S,R,U,E[L+1],K,2240044497);U=t(U,T,S,R,E[L+8],Q,1873313359);R=t(R,U,T,S,E[L+15],P,4264355552);S=t(S,R,U,T,E[L+6],N,2734768916);T=t(T,S,R,U,E[L+13],K,1309151649);U=t(U,T,S,R,E[L+4],Q,4149444226);R=t(R,U,T,S,E[L+11],P,3174756917);S=t(S,R,U,T,E[L+2],N,718787259);T=t(T,S,R,U,E[L+9],K,3951481745);U=H(U,h);T=H(T,G);S=H(S,v);R=H(R,g)}var i=s(U)+s(T)+s(S)+s(R);return i.toLowerCase()},htmlentities:function(b,f,e,a){var d=this.get_html_translation_table("HTML_ENTITIES",f),c="";b=b==null?"":b+"";if(!d){return false}if(f&&f==="ENT_QUOTES"){d["'"]="&#039;"}if(!!a||a==null){for(c in d){if(d.hasOwnProperty(c)){b=b.split(c).join(d[c])}}}else{b=b.replace(/([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g,function(i,h,g){for(c in d){if(d.hasOwnProperty(c)){h=h.split(c).join(d[c])}}return h+g})}return b},html_entity_decode:function(c,f){var e={},d="",a="",b="";a=c.toString();if(false===(e=this.get_html_translation_table("HTML_ENTITIES",f))){return false}delete (e["&"]);e["&"]="&amp;";for(d in e){b=e[d];a=a.split(b).join(d)}a=a.split("&#039;").join("'");return a},get_html_translation_table:function(h,f){var c={},e={},b;var d={},a={};var i={},g={};d[0]="HTML_SPECIALCHARS";d[1]="HTML_ENTITIES";a[0]="ENT_NOQUOTES";a[2]="ENT_COMPAT";a[3]="ENT_QUOTES";i=!isNaN(h)?d[h]:h?h.toUpperCase():"HTML_SPECIALCHARS";g=!isNaN(f)?a[f]:f?f.toUpperCase():"ENT_COMPAT";if(i!=="HTML_SPECIALCHARS"&&i!=="HTML_ENTITIES"){throw new Error("Table: "+i+" not supported")}c["38"]="&amp;";if(i==="HTML_ENTITIES"){c["160"]="&nbsp;";c["161"]="&iexcl;";c["162"]="&cent;";c["163"]="&pound;";c["164"]="&curren;";c["165"]="&yen;";c["166"]="&brvbar;";c["167"]="&sect;";c["168"]="&uml;";c["169"]="&copy;";c["170"]="&ordf;";c["171"]="&laquo;";c["172"]="&not;";c["173"]="&shy;";c["174"]="&reg;";c["175"]="&macr;";c["176"]="&deg;";c["177"]="&plusmn;";c["178"]="&sup2;";c["179"]="&sup3;";c["180"]="&acute;";c["181"]="&micro;";c["182"]="&para;";c["183"]="&middot;";c["184"]="&cedil;";c["185"]="&sup1;";c["186"]="&ordm;";c["187"]="&raquo;";c["188"]="&frac14;";c["189"]="&frac12;";c["190"]="&frac34;";c["191"]="&iquest;";c["192"]="&Agrave;";c["193"]="&Aacute;";c["194"]="&Acirc;";c["195"]="&Atilde;";c["196"]="&Auml;";c["197"]="&Aring;";c["198"]="&AElig;";c["199"]="&Ccedil;";c["200"]="&Egrave;";c["201"]="&Eacute;";c["202"]="&Ecirc;";c["203"]="&Euml;";c["204"]="&Igrave;";c["205"]="&Iacute;";c["206"]="&Icirc;";c["207"]="&Iuml;";c["208"]="&ETH;";c["209"]="&Ntilde;";c["210"]="&Ograve;";c["211"]="&Oacute;";c["212"]="&Ocirc;";c["213"]="&Otilde;";c["214"]="&Ouml;";c["215"]="&times;";c["216"]="&Oslash;";c["217"]="&Ugrave;";c["218"]="&Uacute;";c["219"]="&Ucirc;";c["220"]="&Uuml;";c["221"]="&Yacute;";c["222"]="&THORN;";c["223"]="&szlig;";c["224"]="&agrave;";c["225"]="&aacute;";c["226"]="&acirc;";c["227"]="&atilde;";c["228"]="&auml;";c["229"]="&aring;";c["230"]="&aelig;";c["231"]="&ccedil;";c["232"]="&egrave;";c["233"]="&eacute;";c["234"]="&ecirc;";c["235"]="&euml;";c["236"]="&igrave;";c["237"]="&iacute;";c["238"]="&icirc;";c["239"]="&iuml;";c["240"]="&eth;";c["241"]="&ntilde;";c["242"]="&ograve;";c["243"]="&oacute;";c["244"]="&ocirc;";c["245"]="&otilde;";c["246"]="&ouml;";c["247"]="&divide;";c["248"]="&oslash;";c["249"]="&ugrave;";c["250"]="&uacute;";c["251"]="&ucirc;";c["252"]="&uuml;";c["253"]="&yacute;";c["254"]="&thorn;";c["255"]="&yuml;"}if(g!=="ENT_NOQUOTES"){c["34"]="&quot;"}if(g==="ENT_QUOTES"){c["39"]="&#39;"}c["60"]="&lt;";c["62"]="&gt;";for(b in c){if(c.hasOwnProperty(b)){e[String.fromCharCode(b)]=c[b]}}return e},htmlspecialchars:function(c,h,g,b){var e=0,d=0,f=false;if(typeof h==="undefined"||h===null){h=2}c=c.toString();if(b!==false){c=c.replace(/&/g,"&amp;")}c=c.replace(/</g,"&lt;").replace(/>/g,"&gt;");var a={ENT_NOQUOTES:0,ENT_HTML_QUOTE_SINGLE:1,ENT_HTML_QUOTE_DOUBLE:2,ENT_COMPAT:2,ENT_QUOTES:3,ENT_IGNORE:4};if(h===0){f=true}if(typeof h!=="number"){h=[].concat(h);for(d=0;d<h.length;d++){if(a[h[d]]===0){f=true}else{if(a[h[d]]){e=e|a[h[d]]}}}h=e}if(h&a.ENT_HTML_QUOTE_SINGLE){c=c.replace(/'/g,"&#039;")}if(!f){c=c.replace(/"/g,"&quot;")}return c},htmlspecialchars_decode:function(b,f){var d=0,c=0,e=false;if(typeof f==="undefined"){f=2}b=b.toString().replace(/&lt;/g,"<").replace(/&gt;/g,">");var a={ENT_NOQUOTES:0,ENT_HTML_QUOTE_SINGLE:1,ENT_HTML_QUOTE_DOUBLE:2,ENT_COMPAT:2,ENT_QUOTES:3,ENT_IGNORE:4};if(f===0){e=true}if(typeof f!=="number"){f=[].concat(f);for(c=0;c<f.length;c++){if(a[f[c]]===0){e=true}else{if(a[f[c]]){d=d|a[f[c]]}}}f=d}if(f&a.ENT_HTML_QUOTE_SINGLE){b=b.replace(/&#0*39;/g,"'")}if(!e){b=b.replace(/&quot;/g,'"')}b=b.replace(/&amp;/g,"&");return b},mktime:function(){var f=new Date(),b=arguments,a=0,c=["Hours","Minutes","Seconds","Month","Date","FullYear"];for(a=0;a<c.length;a++){if(typeof b[a]==="undefined"){b[a]=f["get"+c[a]]();b[a]+=(a===3)}else{b[a]=parseInt(b[a],10);if(isNaN(b[a])){return false}}}b[5]+=(b[5]>=0?(b[5]<=69?2000:(b[5]<=100?1900:0)):0);f.setFullYear(b[5],b[3]-1,b[4]);f.setHours(b[0],b[1],b[2]);return(f.getTime()/1000>>0)-(f.getTime()<0)},strftime:function(b,d){this.php_js=this.php_js||{};this.setlocale("LC_ALL",0);var c=this.php_js;var g=function(l,n,m){if(typeof m==="undefined"){m=10}for(;parseInt(l,10)<m&&m>1;m/=10){l=n.toString()+l}return l.toString()};var h=c.localeCategories.LC_TIME;var a=c.locales;var j=a[h].LC_TIME;var e={a:function(l){return j.a[l.getDay()]},A:function(l){return j.A[l.getDay()]},b:function(l){return j.b[l.getMonth()]},B:function(l){return j.B[l.getMonth()]},C:function(l){return g(parseInt(l.getFullYear()/100,10),0)},d:["getDate","0"],e:["getDate"," "],g:function(l){return g(parseInt(this.G(l)/100,10),0)},G:function(n){var o=n.getFullYear();var m=parseInt(e.V(n),10);var l=parseInt(e.W(n),10);if(l>m){o++}else{if(l===0&&m>=52){o--}}return o},H:["getHours","0"],I:function(m){var l=m.getHours()%12;return g(l===0?12:l,0)},j:function(n){var l=n-new Date(""+n.getFullYear()+"/1/1 GMT");l+=n.getTimezoneOffset()*60000;var m=parseInt(l/60000/60/24,10)+1;return g(m,0,100)},k:["getHours","0"],l:function(n){var m=n.getHours()%12;return g(m===0?12:m," ")},m:function(l){return g(l.getMonth()+1,0)},M:["getMinutes","0"],p:function(l){return j.p[l.getHours()>=12?1:0]},P:function(l){return j.P[l.getHours()>=12?1:0]},s:function(l){return Date.parse(l)/1000},S:["getSeconds","0"],u:function(l){var m=l.getDay();return((m===0)?7:m)},U:function(o){var l=parseInt(e.j(o),10);var n=6-o.getDay();var m=parseInt((l+n)/7,10);return g(m,0)},V:function(o){var n=parseInt(e.W(o),10);var l=(new Date(""+o.getFullYear()+"/1/1")).getDay();var m=n+(l>4||l<=1?0:1);if(m===53&&(new Date(""+o.getFullYear()+"/12/31")).getDay()<4){m=1}else{if(m===0){m=e.V(new Date(""+(o.getFullYear()-1)+"/12/31"))}}return g(m,0)},w:"getDay",W:function(o){var l=parseInt(e.j(o),10);var n=7-e.u(o);var m=parseInt((l+n)/7,10);return g(m,0,10)},y:function(l){return g(l.getFullYear()%100,0)},Y:"getFullYear",z:function(n){var m=n.getTimezoneOffset();var l=g(parseInt(Math.abs(m/60),10),0);var p=g(m%60,0);return(m>0?"-":"+")+l+p},Z:function(l){return l.toString().replace(/^.*\(([^)]+)\)$/,"$1")},"%":function(l){return"%"}};var k=((typeof(d)=="undefined")?new Date():(typeof(d)=="object")?new Date(d):new Date(d*1000));var i={c:"locale",D:"%m/%d/%y",F:"%y-%m-%d",h:"%b",n:"\n",r:"locale",R:"%H:%M",t:"\t",T:"%H:%M:%S",x:"locale",X:"locale"};while(b.match(/%[cDFhnrRtTxX]/)){b=b.replace(/%([cDFhnrRtTxX])/g,function(m,l){var n=i[l];return(n==="locale"?j[l]:n)})}var f=b.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g,function(m,l){var n=e[l];if(typeof n==="string"){return k[n]()}else{if(typeof n==="function"){return n(k)}else{if(typeof n==="object"&&typeof(n[0])==="string"){return g(k[n[0]](),n[1])}else{return l}}}});return f},strtotime:function(n,c){if(!n){return null}n=n.trim().replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase();var k;if(n==="now"){return c===null||isNaN(c)?new Date().getTime()/1000|0:c|0}else{if(!isNaN(parse=Date.parse(n))){return parse/1000|0}}if(n=="now"){return new Date().getTime()/1000}else{if(!isNaN(k=Date.parse(n))){return k/1000}}var g=n.match(/^(\d{2,4})-(\d{2})-(\d{2})(?:\s(\d{1,2}):(\d{2})(?::\d{2})?)?(?:\.(\d+)?)?$/);if(g){var j=g[1]>=0&&g[1]<=69?+g[1]+2000:g[1];return new Date(j,parseInt(g[2],10)-1,g[3],g[4]||0,g[5]||0,g[6]||0,g[7]||0)/1000}var d=c?new Date(c*1000):new Date();var m={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};var a={yea:"FullYear",mon:"Month",day:"Date",hou:"Hours",min:"Minutes",sec:"Seconds"};function e(q,p,i){var o=m[p];if(typeof(o)!=="undefined"){var r=o-d.getDay();if(r===0){r=7*i}else{if(r>0&&q==="last"){r-=7}else{if(r<0&&q==="next"){r+=7}}}d.setDate(d.getDate()+r)}}function b(t){var q=t.split(" ");var r=q[0];var i=q[1].substring(0,3);var s=/\d+/.test(r);var p=q[2]==="ago";var o=(r==="last"?-1:1)*(p?-1:1);if(s){o*=parseInt(r,10)}if(a.hasOwnProperty(i)){return d["set"+a[i]](d["get"+a[i]]()+o)}else{if(i==="wee"){return d.setDate(d.getDate()+(o*7))}}if(r==="next"||r==="last"){e(r,i,o)}else{if(!s){return false}}return true}var l="([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?";g=n.match(new RegExp(l,"gi"));if(!g){return false}for(var f=0,h=g.length;f<h;f++){if(!b(g[f])){return false}}return(d.getTime()/1000)},date:function(j,h){var g=this,i,e,b=/\\?([a-z])/gi,a,c=function(k,f){k=k.toString();return k.length<f?c("0"+k,f,"0"):k},d=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"];a=function(f,k){return e[f]?e[f]():k};e={d:function(){return c(e.j(),2)},D:function(){return e.l().slice(0,3)},j:function(){return i.getDate()},l:function(){return d[e.w()]+"day"},N:function(){return e.w()||7},S:function(){var f=e.j();return f<4|f>20&&(["st","nd","rd"][f%10-1]||"th")},w:function(){return i.getDay()},z:function(){var k=new Date(e.Y(),e.n()-1,e.j()),f=new Date(e.Y(),0,1);return Math.round((k-f)/86400000)},W:function(){var k=new Date(e.Y(),e.n()-1,e.j()-e.N()+3),f=new Date(k.getFullYear(),0,4);return c(1+Math.round((k-f)/86400000/7),2)},F:function(){return d[6+e.n()]},m:function(){return c(e.n(),2)},M:function(){return e.F().slice(0,3)},n:function(){return i.getMonth()+1},t:function(){return(new Date(e.Y(),e.n(),0)).getDate()},L:function(){var f=e.Y();return f%4===0&f%100!==0|f%400===0},o:function(){var l=e.n(),f=e.W(),k=e.Y();return k+(l===12&&f<9?1:l===1&&f>9?-1:0)},Y:function(){return i.getFullYear()},y:function(){return e.Y().toString().slice(-2)},a:function(){return i.getHours()>11?"pm":"am"},A:function(){return e.a().toUpperCase()},B:function(){var k=i.getUTCHours()*3600,f=i.getUTCMinutes()*60,l=i.getUTCSeconds();return c(Math.floor((k+f+l+3600)/86.4)%1000,3)},g:function(){return e.G()%12||12},G:function(){return i.getHours()},h:function(){return c(e.g(),2)},H:function(){return c(e.G(),2)},i:function(){return c(i.getMinutes(),2)},s:function(){return c(i.getSeconds(),2)},u:function(){return c(i.getMilliseconds()*1000,6)},e:function(){throw"Not supported (see source code of date() for timezone on how to add support)"},I:function(){var k=new Date(e.Y(),0),m=Date.UTC(e.Y(),0),f=new Date(e.Y(),6),l=Date.UTC(e.Y(),6);return((k-m)!==(f-l))?1:0},O:function(){var k=i.getTimezoneOffset(),f=Math.abs(k);return(k>0?"-":"+")+c(Math.floor(f/60)*100+f%60,4)},P:function(){var f=e.O();return(f.substr(0,3)+":"+f.substr(3,2))},T:function(){return"UTC"},Z:function(){return -i.getTimezoneOffset()*60},c:function(){return"Y-m-d\\TH:i:sP".replace(b,a)},r:function(){return"D, d M Y H:i:s O".replace(b,a)},U:function(){return i/1000|0}};this.date=function(k,f){g=this;i=(f===undefined?new Date():(f instanceof Date)?new Date(f):new Date(f*1000));return k.replace(b,a)};return this.date(j,h)},time:function(){return Math.floor(new Date().getTime()/1000)},urlencode:function(a){a=(a+"").toString();return encodeURIComponent(a).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},urlencode:function(a){a=(a+"").toString();return encodeURIComponent(a).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},base64_encode:function(j){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var d,c,b,n,m,l,k,o,h=0,p=0,g="",f=[];if(!j){return j}do{d=j.charCodeAt(h++);c=j.charCodeAt(h++);b=j.charCodeAt(h++);o=d<<16|c<<8|b;n=o>>18&63;m=o>>12&63;l=o>>6&63;k=o&63;f[p++]=e.charAt(n)+e.charAt(m)+e.charAt(l)+e.charAt(k)}while(h<j.length);g=f.join("");var a=j.length%3;return(a?g.slice(0,a-3):g)+"===".slice(a||3)},base64_decode:function(h){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var c,b,a,m,l,k,j,n,g=0,o=0,e="",f=[];if(!h){return h}h+="";do{m=d.indexOf(h.charAt(g++));l=d.indexOf(h.charAt(g++));k=d.indexOf(h.charAt(g++));j=d.indexOf(h.charAt(g++));n=m<<18|l<<12|k<<6|j;c=n>>16&255;b=n>>8&255;a=n&255;if(k==64){f[o++]=String.fromCharCode(c)}else{if(j==64){f[o++]=String.fromCharCode(c,b)}else{f[o++]=String.fromCharCode(c,b,a)}}}while(g<h.length);e=f.join("");return e},parse_url:function(g,h){var j=["source","scheme","authority","userInfo","user","pass","host","port","relative","path","directory","file","query","fragment"],k=(this.php_js&&this.php_js.ini)||{},f=(k["phpjs.parse_url.mode"]&&k["phpjs.parse_url.mode"].local_value)||"php",b={php:/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};var d=b[f].exec(g),c={},e=14;while(e--){if(d[e]){c[j[e]]=d[e]}}if(h){return c[h.replace("PHP_URL_","").toLowerCase()]}if(f!=="php"){var a=(k["phpjs.parse_url.queryKey"]&&k["phpjs.parse_url.queryKey"].local_value)||"queryKey";b=/(?:^|&)([^&=]*)=?([^&]*)/g;c[a]={};c[j[12]].replace(b,function(l,i,m){if(i){c[a][i]=m}})}delete c.source;return c},in_array:function(e,d,c){var b="",a=!!c;if(a){for(b in d){if(d[b]===e){return true}}}else{for(b in d){if(d[b]==e){return true}}}return false},explode:function(b,c,a){if(arguments.length<2||typeof b=="undefined"||typeof c=="undefined"){return null}if(b===""||b===false||b===null){return false}if(typeof b=="function"||typeof b=="object"||typeof c=="function"||typeof c=="object"){return{0:""}}if(b===true){b="1"}b+="";c+="";var d=c.split(b);if(typeof a==="undefined"){return d}if(a===0){a=1}if(a>0){if(a>=d.length){return d}return d.slice(0,a-1).concat([d.slice(a-1).join(b)])}if(-a>=d.length){return[]}d.splice(d.length+a);return d},implode:function(d,b){var a="",e="",c="";if(arguments.length===1){b=d;d=""}if(typeof(b)==="object"){if(Object.prototype.toString.call(b)==="[object Array]"){return b.join(d)}for(a in b){e+=c+b[a];c=d}return e}return b},array_values:function(a){var b=[],c="";if(a&&typeof a==="object"&&a.change_key_case){return a.values()}for(c in a){b[b.length]=a[c]}return b},array_keys:function(c,e,h){var g=typeof e!=="undefined",d=[],b=!!h,a=true,f="";if(c&&typeof c==="object"&&c.change_key_case){return c.keys(e,h)}for(f in c){if(c.hasOwnProperty(f)){a=true;if(g){if(b&&c[f]!==e){a=false}else{if(c[f]!=e){a=false}}}if(a){d[d.length]=f}}}return d},array_key_exists:function(b,a){if(!a||(a.constructor!==Array&&a.constructor!==Object)){return false}return b in a},array_merge:function(){var g=Array.prototype.slice.call(arguments),l=g.length,m,b={},a="",n=0,c=0,e=0,f=0,h=Object.prototype.toString,d=true;for(e=0;e<l;e++){if(h.call(g[e])!=="[object Array]"){d=false;break}}if(d){d=[];for(e=0;e<l;e++){d=d.concat(g[e])}return d}for(e=0,f=0;e<l;e++){m=g[e];if(h.call(m)==="[object Array]"){for(c=0,n=m.length;c<n;c++){b[f++]=m[c]}}else{for(a in m){if(m.hasOwnProperty(a)){if(parseInt(a,10)+""===a){b[f++]=m[a]}else{b[a]=m[a]}}}}}return b},array_map:function(){var h=arguments.length,b=arguments;var e=b[1].length,g=0,d=1,a=0;var f=[],c=[];while(g<e){while(d<h){f[a++]=b[d++][g]}a=0;d=1;if(callback){if(typeof callback==="string"){callback=this.window[callback]}c[g++]=callback.apply(null,f)}else{c[g++]=f}f=[]}return c},array_pop:function(d){var c="",a="";if(d.hasOwnProperty("length")){if(!d.length){return null}return d.pop()}else{for(c in d){if(d.hasOwnProperty(c)){a=c}}if(a){var b=d[a];delete (d[a]);return b}else{return null}}},array_shift:function(e){var d=false,a=undefined,g="",c=/^\d$/,f=-1,b=function(h,k,j){if(h[k]!==undefined){var i=k;k+=1;if(k===j){k+=1}k=b(h,k,j);h[k]=h[i];delete h[i]}return k};if(e.length===0){return null}if(e.length>0){return e.shift()}},count:function(c,d){var b,a=0;if(c===null||typeof c==="undefined"){return 0}else{if(c.constructor!==Array&&c.constructor!==Object){return 1}}if(d==="COUNT_RECURSIVE"){d=1}if(d!=1){d=0}for(b in c){if(c.hasOwnProperty(b)){a++;if(d==1&&c[b]&&(c[b].constructor===Array||c[b].constructor===Object)){a+=this.count(c[b],1)}}}return a},checkdate:function(a,b,c){return a>0&&a<13&&c>0&&c<32768&&b>0&&b<=(new Date(c,a,0)).getDate()},date_parse:function(b){this.php_js=this.php_js||{};var f=this.php_js.warnings?this.php_js.warnings.length:null;var a=this.php_js.errors?this.php_js.errors.length:null;try{var d=this.strtotime(b)}finally{if(!d){return false}}var c=new Date(d*1000);var e={warning_count:f!==null?this.php_js.warnings.slice(f).length:0,warnings:f!==null?this.php_js.warnings.slice(f):[],error_count:a!==null?this.php_js.errors.slice(a).length:0,errors:a!==null?this.php_js.errors.slice(a):[]};e.year=c.getFullYear();e.month=c.getMonth()+1;e.day=c.getDate();e.hour=c.getHours();e.minute=c.getMinutes();e.second=c.getSeconds();e.fraction=parseFloat("0."+c.getMilliseconds());e.is_localtime=c.getTimezoneOffset!==0;return e},function_exists:function(a){if(typeof a==="string"){a=this.window[a]}return typeof a==="function"},json_decode:function(str_json){var json=this.window.JSON;if(typeof json==="object"&&typeof json.parse==="function"){try{return json.parse(str_json)}catch(err){if(!(err instanceof SyntaxError)){throw new Error("Unexpected error type in json_decode()")}this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var j;var text=str_json;cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if((/^[\],:{}\s]*$/).test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return j}this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null},json_encode:function(g){var e,b=this.window.JSON;try{if(typeof b==="object"&&typeof b.stringify==="function"){e=b.stringify(g);if(e===undefined){throw new SyntaxError("json_encode")}return e}var d=g;var a=function(h){var j=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};j.lastIndex=0;return j.test(h)?'"'+h.replace(j,function(k){var l=i[k];return typeof l==="string"?l:"\\u"+("0000"+k.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+h+'"'};var f=function(s,o){var q="";var j="    ";var m=0;var l="";var t="";var h=0;var p=q;var n=[];var r=o[s];if(r&&typeof r==="object"&&typeof r.toJSON==="function"){r=r.toJSON(s)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}if((this.PHPJS_Resource&&r instanceof this.PHPJS_Resource)||(window.PHPJS_Resource&&r instanceof window.PHPJS_Resource)){throw new SyntaxError("json_encode")}q+=j;n=[];if(Object.prototype.toString.apply(r)==="[object Array]"){h=r.length;for(m=0;m<h;m+=1){n[m]=f(m,r)||"null"}t=n.length===0?"[]":q?"[\n"+q+n.join(",\n"+q)+"\n"+p+"]":"["+n.join(",")+"]";q=p;return t}for(l in r){if(Object.hasOwnProperty.call(r,l)){t=f(l,r);if(t){n.push(a(l)+(q?": ":":")+t)}}}t=n.length===0?"{}":q?"{\n"+q+n.join(",\n"+q)+"\n"+p+"}":"{"+n.join(",")+"}";q=p;return t;case"undefined":case"function":default:throw new SyntaxError("json_encode")}};return f("",{"":d})}catch(c){if(!(c instanceof SyntaxError)){throw new Error("Unexpected error type in json_encode()")}this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null}},isset:function(){var c=arguments,b=c.length,d=0,e;if(b===0){throw new Error("Empty isset")}while(d!==b){if(c[d]===e||c[d]===null){return false}d++}return true},uniqid:function(d,c){if(typeof d==="undefined"){d=""}var b;var a=function(e,f){e=parseInt(e,10).toString(16);if(f<e.length){return e.slice(e.length-f)}if(f>e.length){return Array(1+(f-e.length)).join("0")+e}return e};if(!this.php_js){this.php_js={}}if(!this.php_js.uniqidSeed){this.php_js.uniqidSeed=Math.floor(Math.random()*123456789)}this.php_js.uniqidSeed++;b=d;b+=a(parseInt(new Date().getTime()/1000,10),8);b+=a(this.php_js.uniqidSeed,5);if(c){b+=(Math.random()*10).toFixed(8).toString()}return b},end:function(a){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var f=function(k){for(var h=0,j=this.length;h<j;h++){if(this[h]===k){return h}}return -1};var c=this.php_js.pointers;if(!c.indexOf){c.indexOf=f}if(c.indexOf(a)===-1){c.push(a,0)}var e=c.indexOf(a);if(Object.prototype.toString.call(a)!=="[object Array]"){var d=0;for(var b in a){d++;var g=a[b]}if(d===0){return false}c[e+1]=d-1;return g}if(a.length===0){return false}c[e+1]=a.length-1;return a[c[e+1]]}};