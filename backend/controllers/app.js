const text = (req, res) => {
  res.json("Test Is working...");
};

const login = async (req, res) => {
  try {
    const { first, last } = req.body;
    if (!first) {
      return res.json({
        error: "First name is Required",
      });
    }
    if (!last) {
      return res.json({
        error: "Last name is Required",
      });
    }

    return res.json("Success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { text, login };
