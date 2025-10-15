import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Платеж обрабатывается",
      description: "Ваш платеж успешно отправлен на обработку",
    });
    setAmount('');
    setCardNumber('');
    setCardName('');
    setExpiry('');
    setCvv('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.3), rgba(34, 139, 34, 0.4)), url('https://cdn.poehali.dev/projects/672f5452-66cf-415d-861f-073afcdaf12e/files/d6f54e44-db75-48e7-8956-6badc5cee286.jpg')`
        }}
      />
      
      <div className="relative z-10">
        <nav className="border-b border-white/20 backdrop-blur-sm bg-white/10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <Icon name="Home" size={28} />
              <span className="text-2xl font-bold">VILLAGE HOUSE</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-white">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#payment" className="hover:text-primary transition-colors">Оплата</a>
              <a href="#security" className="hover:text-primary transition-colors">Безопасность</a>
            </div>
          </div>
        </nav>

        <section id="home" className="container mx-auto px-4 py-20 min-h-[85vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="text-white space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Безопасные платежи для вашего дома
              </h1>
              <p className="text-xl text-white/90">
                Принимаем платежи с любых банковских карт. Быстро, надежно и безопасно.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Icon name="CreditCard" size={20} />
                  <span>Visa / MasterCard</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Icon name="Shield" size={20} />
                  <span>100% защита</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Icon name="CheckCircle" size={20} />
                  <span>Мгновенно</span>
                </div>
              </div>
            </div>

            <Card id="payment" className="backdrop-blur-md bg-white/95 shadow-2xl animate-scale-in border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">Оформить платеж</CardTitle>
                <CardDescription>Введите данные карты для оплаты</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Сумма платежа (₽)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="1000"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Номер карты</Label>
                    <Input
                      id="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardName">Имя владельца</Label>
                    <Input
                      id="cardName"
                      type="text"
                      placeholder="IVAN IVANOV"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Срок действия</Label>
                      <Input
                        id="expiry"
                        type="text"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        maxLength={5}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
                    Оплатить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="security" className="bg-white/95 backdrop-blur-md py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Почему нам доверяют</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover-scale transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
                    <Icon name="CreditCard" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Любые карты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Принимаем Visa, MasterCard, МИР и другие платежные системы
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-secondary/10 rounded-full">
                    <Icon name="CheckCircle" size={32} className="text-secondary" />
                  </div>
                  <CardTitle>Мгновенная обработка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Платежи обрабатываются в режиме реального времени
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-accent/10 rounded-full">
                    <Icon name="Shield" size={32} className="text-accent" />
                  </div>
                  <CardTitle>Полная безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Защита данных по стандартам PCI DSS и SSL шифрование
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">© 2024 Village House Payment. Все платежи защищены</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
