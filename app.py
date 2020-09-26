import os
from google.cloud import firestore
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = './igneous-trail-290716-59bdaa302fe3.json'
db = firestore.Client()


@app.route("/verify-login", methods=["GET"])
def verify_login():
    users_ref = db.collection(u'users')
    docs = users_ref.stream()

    email = request.args['email']
    pwd = request.args['pwd']

    return_statement = "This user does not exist."
    for doc in docs:
        if doc.id == email:
            user = doc.to_dict()
            return_statement = "The password you entered is incorrect."
            if user['password'] == pwd:
                return {'email': email, 'pwd': pwd, 'status': 1, 'message': 'Successful Login'}
            else:
                return{'email': email, 'pwd': pwd, 'status': 0, 'message': return_statement}

    return {'email': email, 'pwd': pwd, 'status': 0, 'message': return_statement}


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)