import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/img/862d021c-9dd5-4187-8ef8-05d6a73a9eef.jpg')",
        }}
      />

      {/* Neon Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(0,255,65,0.03)_25px,rgba(0,255,65,0.03)_26px,transparent_27px,transparent_49px,rgba(0,255,65,0.03)_50px,rgba(0,255,65,0.03)_51px,transparent_52px),linear-gradient(rgba(0,255,65,0.03)_24px,transparent_25px,transparent_26px,rgba(0,255,65,0.03)_27px,rgba(0,255,65,0.03)_49px,transparent_50px,transparent_51px,rgba(0,255,65,0.03)_52px)] bg-[length:50px_50px]" />

      {/* Header */}
      <header className="relative z-10 p-6 border-b border-neon-green/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-neon-green animate-glow">
              CS 1.6 | ОРБИТРОН
            </div>
            <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50 animate-neon-pulse">
              ONLINE
            </Badge>
          </div>
          <nav className="flex space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:text-neon-green transition-colors"
            >
              ГЛАВНАЯ
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-neon-green transition-colors"
            >
              СЕРВЕРА
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-neon-green transition-colors"
            >
              ДОНАТ
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-neon-green transition-colors"
            >
              КОНТАКТЫ
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue animate-glow">
            COUNTER-STRIKE 1.6
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Легендарный сервер с VIP-привилегиями и уникальными возможностями.
            Присоединяйся к элитному сообществу игроков!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-neon-green hover:bg-neon-green/80 text-black font-bold px-8 py-4 animate-neon-pulse"
            >
              <Icon name="Play" className="mr-2" />
              ИГРАТЬ СЕЙЧАС
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neon-pink text-neon-pink hover:bg-neon-pink/10 px-8 py-4"
            >
              <Icon name="Crown" className="mr-2" />
              ПОЛУЧИТЬ VIP
            </Button>
          </div>
        </div>
      </section>

      {/* Server Stats */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-neon-green/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-neon-green flex items-center justify-center">
                  <Icon name="Server" className="mr-2" />
                  СЕРВЕР #1
                </CardTitle>
                <CardDescription className="text-gray-400">
                  de_dust2 | 32/32 игроков
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  192.168.1.100:27015
                </div>
                <Progress value={100} className="mb-4" />
                <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
                  ПОЛНЫЙ
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-neon-blue/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-neon-blue flex items-center justify-center">
                  <Icon name="Zap" className="mr-2" />
                  СЕРВЕР #2
                </CardTitle>
                <CardDescription className="text-gray-400">
                  de_inferno | 28/32 игроков
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  192.168.1.101:27015
                </div>
                <Progress value={87} className="mb-4" />
                <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/50">
                  ДОСТУПЕН
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-neon-pink/30 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-neon-pink flex items-center justify-center">
                  <Icon name="Crown" className="mr-2" />
                  VIP СЕРВЕР
                </CardTitle>
                <CardDescription className="text-gray-400">
                  de_cache | 16/20 игроков
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  192.168.1.102:27015
                </div>
                <Progress value={80} className="mb-4" />
                <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink/50 animate-neon-pulse">
                  VIP ТОЛЬКО
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VIP Donation Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple animate-glow">
              VIP ПРИВИЛЕГИИ
            </h2>
            <p className="text-xl text-gray-300">
              Получи максимум от игры с VIP-статусом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-neon-green/10 to-neon-blue/10 border-neon-green/50 backdrop-blur-sm hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className="text-neon-green flex items-center">
                  <Icon name="Sword" className="mr-2" />
                  BRONZE VIP
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-white">
                  299 ₽ / месяц
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-neon-green"
                      size={16}
                    />
                    Доступ к VIP-серверам
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-neon-green"
                      size={16}
                    />
                    Больше HP и брони
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-neon-green"
                      size={16}
                    />
                    Эксклюзивные скины
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-neon-green hover:bg-neon-green/80 text-black font-bold">
                  КУПИТЬ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border-neon-blue/50 backdrop-blur-sm hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className="text-neon-blue flex items-center">
                  <Icon name="Shield" className="mr-2" />
                  SILVER VIP
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-white">
                  599 ₽ / месяц
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-neon-blue"
                      size={16}
                    />
                    Все привилегии Bronze
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-neon-blue"
                      size={16}
                    />
                    Бесплатное оружие
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-neon-blue"
                      size={16}
                    />
                    Двойной опыт
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-neon-blue hover:bg-neon-blue/80 text-black font-bold">
                  КУПИТЬ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 border-neon-pink/50 backdrop-blur-sm hover:scale-105 transition-transform animate-neon-pulse">
              <CardHeader>
                <CardTitle className="text-neon-pink flex items-center">
                  <Icon name="Crown" className="mr-2" />
                  GOLD VIP
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-white">
                  999 ₽ / месяц
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-neon-pink"
                      size={16}
                    />
                    Все привилегии Silver
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-neon-pink"
                      size={16}
                    />
                    Админ-команды
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="mr-2 text-neon-pink"
                      size={16}
                    />
                    Эксклюзивные карты
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-neon-pink hover:bg-neon-pink/80 text-black font-bold">
                  КУПИТЬ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue animate-glow">
            КОНТАКТЫ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-neon-green/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MessageCircle"
                  className="mx-auto mb-4 text-neon-green"
                  size={32}
                />
                <h3 className="text-xl font-bold text-white mb-2">Discord</h3>
                <p className="text-gray-300">discord.gg/cs16orbitron</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-neon-blue/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Send"
                  className="mx-auto mb-4 text-neon-blue"
                  size={32}
                />
                <h3 className="text-xl font-bold text-white mb-2">Telegram</h3>
                <p className="text-gray-300">@orbitron_cs16</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-neon-pink/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Globe"
                  className="mx-auto mb-4 text-neon-pink"
                  size={32}
                />
                <h3 className="text-xl font-bold text-white mb-2">Форум</h3>
                <p className="text-gray-300">forum.orbitron.game</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-neon-green/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 CS 1.6 ОРБИТРОН. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
