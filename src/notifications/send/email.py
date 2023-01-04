import smtplib, os, json
from email.message import EmailMessage

def notification(message):
    try:
        message = json.loads(message)
        mp3_fid = message["mp3_fid"]
        sender_address = os.environ.get("GMAIL_ADDRESS")
        sender_password = os.environ.get("GMAIL_PASSWORD")
        receiver_address = message["username"]

        message = EmailMessage()
        message.set_content(f"mp3 file_id: {mp3_fid} is now ready!")
        message["Subject"] = "MP3 Download"
        message["From"] = sender_address
        message["To"] = receiver_address

        session = smtplib.SMTP("smtp.gmail.com")
        session.starttls()
        session.login(sender_address, sender_password)
        session.send_message(message, sender_address, receiver_address)
        session.quit()
        print("Mail sent")
    except Exception as err:
        print(err)
        return err;