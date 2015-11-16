// Get Index
export const getDefault = (req, res) => {
  res.render('index');
};

// CatchAll
export const getCatchAll = (req, res) => {
  // AJAX requests are aren't expected to be redirected to the AngularJS app
  if (req.xhr) {
    return res.status(404).send(req.url + ' not found');
  }

  // `sendfile` requires the safe, resolved path to your AngularJS app
  res.render('index');
};
