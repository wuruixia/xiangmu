$(function(){
  let jcl=$('.jie-center>li');
  let jb=$('.jie-bottom');
  let now=0;
  
})





window.onload=function(){
	let jc=document.getElementsByClassName('jie-center')[0];
	let jcl=jc.getElementsByTagName('li');
	let jb=document.getElementsByClassName('jie-bottom');
       let now=0;
	for(let i=0;i<jcl.length;i++){
       jb[0].style.display='block';
       jcl[0].style.background='#AC6E2E';
       jcl[i].onclick=function(){
       	jcl[now].style.background='#BF803E';
       	jb[now].style.display='none';
       	jb[i].style.display='block';
       	jcl[i].style.background='#AC6E2E';
              now=i;
       }
	}

}
