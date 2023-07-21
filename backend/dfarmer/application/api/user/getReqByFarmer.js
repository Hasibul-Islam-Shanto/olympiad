module.exports = {
  getReq: async (req, res, contract) => {
    // API implementation
    const userId = req.params.userId;
    try {
      const result = await contract.evaluateTransaction(
        'GetRequestByFarmer',
        userId
      );
      console.log(result.toString());
      res.send(result.toString());
    } catch (error) {
      res.status(400).send('Req data not found');
    }
  },
};
