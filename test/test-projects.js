const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
// const Charity = require('../models/charity');

chai.use(chaiHttp);