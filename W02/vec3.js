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
