import { ThreeKnife } from '../models/ThreeKnife.js';
import { AbstractAPI } from './AbstractAPI.js';

export class ThreeKnifeAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'ThreeKnife', ThreeKnife); 
    }
}
