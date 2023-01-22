import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GithubService } from 'src/services/github.service';
import { user } from '../Models/userModel';
import { ErrorHandler } from '@angular/core';
import { HttpBackend, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-git-hub-spa',
  templateUrl: './git-hub-spa.component.html',
  styleUrls: ['../styles/site.css','../styles/all.min.css']
})
export class GitHubSPAComponent {
addressForm = this.fb.group({
    user: [],});
user_name:any;
user!: user;
id;
avatar_url;
login;
created_at;
name;
location;
twitter_username;
blog;
public_repos;
followers;
following;
constructor(private fb:FormBuilder,public api:GithubService,){

}

async getUser(){
this.user_name=this.addressForm.controls.user.value;
var res:user = await (this.api.getUser(this.user_name));

console.log(res);
  this.id=res.id;
  this.avatar_url=res.avatar_url;
  this.login=res.login;
  this.created_at=res.created_at.substring(0,10);
  this.name=res.name;
  this.location=res.location;
  this.twitter_username=res.twitter_username;
  this.blog=res.blog;
  this.public_repos=res.public_repos;
  this.followers=res.followers;
  this.following=res.following;

}




}
