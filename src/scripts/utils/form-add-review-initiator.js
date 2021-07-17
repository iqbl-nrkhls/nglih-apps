import showNotif from './show-notification';

class FormAddReviewInitiator {
  constructor({ form, restaurantId }) {
    this._form = form;
    this._restaurantId = restaurantId;
    this._reviewerName = '';
    this._review = '';
    this._status = {};
  }

  async send() {
    this._reviewerName = this._form.querySelector('#reviewer_name').value;
    this._review = this._form.querySelector('#review_content').value;

    if (this._readyToSend()) {
      await this._sendReview();
    } else {
      this._respondFailed({
        message: 'Please check input field',
      });
    }

    return this._status;
  }

  _readyToSend() {
    if (this._reviewerName !== '' && this._review !== '') {
      return true;
    }
    return false;
  }

  async _sendReview() {
    const data = {
      id: this._restaurantId,
      name: this._reviewerName,
      review: this._review,
    };

    await fetch('https://restaurant-api.dicoding.dev/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 12345,
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {
        this._afterRespond(responseJson);
      }).catch((error) => {
        this._afterRespond({
          error: true,
          message: error,
        });
      });
  }

  _afterRespond(responseJson) {
    if (!responseJson.error) {
      this._respondSuccess(responseJson);
    } else {
      this._respondFailed(responseJson);
    }
  }

  _respondSuccess(responseJson) {
    this._status = { success: true };
    this._form.reset();
    showNotif({
      message: responseJson.message,
      color: 'green',
    });
  }

  _respondFailed(responseJson) {
    this._status = { success: false };
    this._form.focus();
    showNotif({
      message: responseJson.message,
      color: 'red',
    });
  }
}

export default FormAddReviewInitiator;
