# Dependency Checker

Merhaba, görüşmeye katıldığın için teşekkür ederiz. Görüşme sonunda sana bahsetmiş olduğumuz use case'leri aşağıda da bulabilirsin.

Senden isteğimiz GitHub API'yi ile çok fazla uğraşmaman adına sadece public repolarda çalışmak üzere, PHP ve Node.js uygulamaları için dependency'lerin güncelliğini kontrol eden bir sistem implemente etmen.

Senaryo ise şu şekilde;
- Kullanıcı ilgili repoyu ve bildirim almak istediği e-mail adresini girip request yapar. (Aynı repo icin birden fazla e-mail girilebilir.)
- Sistem, bu repolarda ana dizinde package.json veya composer.json var mı diye bakar.
- Eğer bulursa bu dosyaları parse edip, dependency listesini çıkarır.
- Bu listedeki paketlerin ilgili registry'deki son versiyon numarasını bulur.
- Repodaki versiyonu ve registery'deki son versiyonu karşılaştırır.
- Kullanıcıya outdated olanları gösterir.
- Ayrıca her gün (kayıttan sonra 24 saatte bir) outdated olan paketlerin listesini verilen e-mail adresine yollar.

> Cevabın hazır olduğu zaman bu repo'ya çözümü `push` edebilirsin. Böylece çözümün bize ulaşmış olacak ve biz de inceleyip sonucu seninle paylaşacağız.
