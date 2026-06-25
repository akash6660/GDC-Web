document.getElementById('loginForm').addEventListener('submit',function(e){
e.preventDefault();
const em=document.getElementById('email').value.trim();
const pw=document.getElementById('password').value.trim();
if(em==='gdc2028@gmail.com'&&pw==='GdcDemo@1514'){
document.getElementById('error-message').style.color='green';
document.getElementById('error-message').textContent='Authenticating...';
setTimeout(()=>location.href='index.html',1000);
}else{
document.getElementById('error-message').style.color='red';
document.getElementById('error-message').textContent='Invalid email or password';
}
});