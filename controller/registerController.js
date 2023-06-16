import Registration from '../models/registerModel.js';

export const register = async (req, res) => {
    const { payer,
            email,
            phoneNumber,
            numberOfPeople,
            owners,
            conference,
            association,
            church
        } = req.body;
    // pass
    const result = await Registration.create( { 
        payer,
        email,
        phoneNumber,
        numberOfPeople,
        owners,
        conference,
        association,
        church
    });

    console.log(result);
    res.status(200).json({ result })

}