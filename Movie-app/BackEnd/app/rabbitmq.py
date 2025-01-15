import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.queue_declare(queue='media_processing')

def send_message(message):
    channel.basic_publish(exchange='', routing_key='media_processing', body=message)
    print(f" [x] Sent {message}")

def receive_message():
    def callback(ch, method, properties, body):
        print(f" [x] Received {body}")

    channel.basic_consume(queue='media_processing', on_message_callback=callback, auto_ack=True)
    channel.start_consuming()
