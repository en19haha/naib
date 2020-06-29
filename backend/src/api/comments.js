// libs
import { Router } from 'express';
// modules
import CommentModel from '../models/commentModel.js';

// router init
const router = Router();

router.post('/', async (req, res) => {
	try {
		const doc = await CommentModel.create({
			...req.body,
		});
		res.status(201).json({ data: doc });
	} catch (error) {
		console.log(error);
		if (error.code === 11000) {
			return res.status(400).send({ message: 'Duplicated Data', error });
		}
		res.status(400).send({ message: 'sth wrong', error });
	}
});

router.get('/', async (req, res) => {
	try {
		const docs = await CommentModel.find({
			...req.body,
		})
		.lean()
		.exec();

		res.status(200).json({
			comments: docs,
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: 'sth wrong', error });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const doc = await CommentModel.findOne({
			createdBy: req.user._id,
			_id: req.params.id,
		})
		.lean()
		.exec();

		if (!doc) {
			return res.status(400).json({ message: 'The data is not found' });
		}

		res.status(200).json({ ...doc });
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: 'sth wrong', error });
	}
});

router.put('/:id', async (req, res) => {
	try {
		const updatedDoc = await CommentModel.findOneAndUpdate(
			{
				createdBy: req.user._id,
				_id: req.params.id,
			},
			req.body,
			{ new: true },
		)
		.lean()
		.exec();

		if (!updatedDoc) {
			return res.status(400).json({ message: 'cannot update the data' });
		}

		res.status(200).json({ ...updatedDoc });
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: 'sth wrong', error });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const removed = await CommentModel.findOneAndRemove({
			createdBy: req.user._id,
			_id: req.params.id,
		})
		.lean()
		.exec();

		if (!removed) {
			return res.status(400).json({ message: 'cannot remove the data' });
		}

		return res.status(200).json({ ...removed });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'sth wrong', error });
	}
});

export default router;
