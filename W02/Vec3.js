Vec3 = function(x,y,z)
{
 this.x=x;
 this.y=y;
 this.z=z;
}


Vec3.prototype.min = function()
{
var a;
if(this.x<this.y)
  {
    a=this.x;
  }
else
  {
    a=this.y;
  }
if(a>this.z)
  {
    a=this.z;
  }
  return a;
}

Vec3.prototype.mid = function()
{
var a;
if(this.x<this.y)
  {
    a=this.y;
  }
else
  {
    a=this.x;
  }
if(a>this.z)
  {
    a=this.z;
  }
  return a;
}

Vec3.prototype.max = function()
{
var a;
if(this.x>this.y)
  {
    a=this.x;
  }
else
  {
    a=this.y;
  }
if(a<this.z)
  {
    a=this.z;
  }
  return a;
}






