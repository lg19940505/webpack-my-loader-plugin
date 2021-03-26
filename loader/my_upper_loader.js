module.exports=function(src){
  if(src){
      console.log('upper_loader---start',src)
      src=src.split('').reduce((str,s) => {
          str+=s.toUpperCase()
          return str
      },'');
      console.log('upper_loader---end',src)
  }
  return `module.exports='${src}'`//直接返回src  报 Module parse failed: Unexpected token (1:2)
}