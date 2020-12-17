const request = require('supertest');
const express = require('express');
const assert = require('assert');
 
const app = require('../index');

describe('GET /user', function() {
    var errorLevel;
    it('responds with json', function(done) {
      request(app)
        .get('/comment')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end(function(err,res){
            if (err){
                throw err;
            }
            else console.log('Test Confirmed');
        })
        if(!errorLevel){
            done();
        }
       
    });

    it('Should return posts', function(done) {
        request(app)
          .get('/post')
          .expect(200)
          .expect('Content-Type', 'application/json; charset=utf-8')
          .end(function(err,res){
              if (err){
                  throw err;
              }
              
              else console.log('Test Confirmed');
          })
          if(!errorLevel){
              done();
          }
         
      });

  });

