function sendResponse(res, message, result, code = 200) {
  let response = {
    metadata: {
      responseCode: code,
      success: true,
      message: message,
    },
    payload: result,
  };

  return res.status(response.metadata.responseCode).json(response);
}

function sendError(res, message, result = [], code = 404) {
  let response = {
    metadata: {
      responseCode: code,
      success: false,
      message: message,
    },
    payload: result,
  };

  return res.status(response.metadata.responseCode).json(response);
}

function getDefaultResponse() {
  return {
    metadata: {
      responseCode: 400,
      success: false,
      message: 'Something went wrong, internal serve error',
    },
    payload: [],
  };
}

module.exports = { sendResponse, sendError, getDefaultResponse };