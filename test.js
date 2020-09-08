const expect = require('expect');
var request = require('supertest');
const {app} = require('./app');
const { text } = require('express');

describe('POST /', () =>{
    it("should return the scrap data from the given url",(done)=>{
        var url="https://medium.com/hacking-talent/kafka-all-you-need-to-know-8c7251b49ad0";
       
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

    it("should return url is required",(done)=>{
        request(app).post('/')
        .expect(400)
        .end((err,res)=>{
            if(err) return done(err);
            expect(res.body.message).toBe("url is required")
            done();

        })
    })
})