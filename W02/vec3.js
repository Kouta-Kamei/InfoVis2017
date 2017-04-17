Vec3 = function(x,y,z)
{
  this.x=x;
  this.y=y;
  this.z=z;
}

Vec3.prototype.add = function(v)
{
  this.x += v.x;
  this.y += v.y;
  this.z += v.z;
  return this;
}

Vec3.prototype.sum = function()
{
  return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
  if(this.x > this.y && this.y > this.z)
  {
    return this.z;
  }
  else if(this.x < this.y && this.x < this.z)
  {
    return this.x;
  }
  else
  {
    return this.y;
  }

}
Vec3.prototype.mid = function()
{
  if(this.x > this.y && this.y > this.z)
  {
    return this.y;
  }
  else if(this.x > this.y && this.x < this.z)
  {
    return this.x;
  }
  else
  {
    return this.y;
  }
}


Vec3.prototype.max = function()
{
  if(this.x < this.y && this.z < this.y)
  {
    return this.y;
  }
  else if(this.y < this.z && this.x < this.z)
  {
    return this.z;
  }
  else
  {
    return this.x;
  }
}

function AreaOfTriangle(v0,v1,v2)
{
  var Ax=v1.x-v0.x;
  var Ay=v1.y-v0.y;
  var Az=v1.z-v0.z;
  var Bx=v2.x-v0.x;
  var By=v2.y-v0.y;
  var Bz=v2.z-v0.z;
  var  A=Math.pow(Ax,2)+Math.pow(Ay,2)+Math.pow(Az,2) ;
  var  B=Math.pow(Bx,2)+Math.pow(By,2)+Math.pow(Bz,2) ;
  var AB=Math.pow(Ax*Bx+Ay*By+Az*Bz,2);
  var  S=Math.sqrt(A*B-AB)/2 ;
  return S;
}

