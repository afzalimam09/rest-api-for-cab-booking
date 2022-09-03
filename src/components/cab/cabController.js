import Cab from '../../models/cabModel.js';
import { createOne, deleteOne, getAll, getOne, updateOne } from '../handleFactory.js';

export const getAllCabs = getAll(Cab);

export const createCab = createOne(Cab);

export const getCab = getOne(Cab);

export const updateCab = updateOne(Cab);

export const deleteCab = deleteOne(Cab);