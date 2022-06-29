const User = require('../models/user');

exports.deleteUser = async (req, res, next) => {
	try {
		const user = await User.findByIdAndDelete(req.user.id);

		res.status(200).json({
			status: 'success',
			message: 'Your account has been deleted!'
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			msg: error.message
		});
	}
};
