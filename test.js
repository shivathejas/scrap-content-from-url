const expect = require('expect');
var request = require('supertest');
const {app} = require('./app');
const { text } = require('express');

describe('POST /', () =>{
    it("should return the scrap data from the given url",(done)=>{
        var url="https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/";
       
       request(app).post('/')
            .send({url})
            .expect(200)
            .expect((res)=>{
                // expect(res.body.title).toBe()
                // expect(res.body.description).toBe(String);
            })
            .end((err,res)=>{
                if(err) return done(err);
                done();

            })
    })

    it("url format is not proper",(done)=>{
        var url="cscascaca"
        request(app).post('/')
        .send({url})
        .expect(400)
        .end((err,res)=>{
            if(err) return done(err);
            expect(res.body.message).toBe("url format is not proper")
            done();

        })
    })

    it("should return meta has undefined",(done)=>{
        var url="";
        request(app).post('/')
        .send({url})
        .expect(400)
        .end((err,res)=>{
            if(err) return done(err);
            expect(res.body.message).toBe("url format is not proper")
            done();

        })
    })
})