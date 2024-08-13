# Express.js ilə Azərbaycan Telefon Nömrəsi Doğrulaması 📞

Bu layihə, `express-validator` kitabxanasını istifadə edərək Azərbaycan telefon nömrələrinin doğrulamasını təmin edən bir Express.js tətbiqidir. Bu, sadə bir halda yazılmış bir nümunədir.

![Express Validator](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*W7bfSxWqT7Y2UOa_uxO7gA.png)

## Mündəricat 📚

- [Başlanğıc](#başlanğıc)
- [Tələb olunanlar](#tələb-olunanlar)
- [Qurulum](#qurulum)
- [İstifadə](#istifadə)
- [Layihə Qovluq Quruluşu](#layihə-qovluq-quruluşu)
- [Texniki Detallar](#texniki-detallar)
- [Layihə Haqqında](#layihə-haqqında)
- [Lisenziya](#lisenziya)

## Başlanğıc 🚀

Bu sənəddə sizə necə layihəni qurub işə salmaq lazım olduğunu öyrədəcəyik.

### Tələb olunanlar 📋

Aşağıdakı alətlərin kompüterinizdə quraşdırıldığından əmin olun:

- [Node.js](https://nodejs.org/) (v12 və ya daha yeni)
- [npm](https://www.npmjs.com/)

### Layihə Qovluq Quruluşu 📁
Layihə qovluğu aşağıdakı struktura malikdir: 
express-validator/
├── app.js
├── package.json
└── README.md

### Layihə Haqqında ℹ️
Bu layihə, Azərbaycan telefon nömrələrini doğrulamaq üçün sadə bir Express.js tətbiqi təqdim edir. Burada express-validator kitabxanasının istifadəsi ilə tanış ola bilərsiniz.

### Texniki Detallar 🛠️
Express.js - Web server framework
express-validator - Girişləri doğrulamaq və sanitizasiya etmək üçün istifadə olunur
### Qurulum ⚙️

1. Bu repositoriyanı klonlayın və layihə qovluğuna keçin:

   ```bash
   git clone https://github.com/Tunar-Hasanov/express-validator.git
   cd express-validator
   npm i
   node app.js
