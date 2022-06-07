
from django.core.mail import send_mail

def send_email_confirmation(adocao):
    try:
        assunto = "Confirmação de adoção!"
        content = f"Parabens, você acaba de adotar {adocao.pet.name}! Com o valor mensal de {adocao.value}. Obrigado!"
        rementente = "rodrigoferreira.rf844@gmail.com"
        destinatario = [adocao.email]
        send_mail(assunto, content, rementente, destinatario)
        print("Email enviado com sucesso!")
    except Exception as error:
        print(error)