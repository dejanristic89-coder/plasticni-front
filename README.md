# Plastični front

Lokacijska AR strateška igra sa plastičnim vojnicima (Ruma).

## geotest/ – test preciznog pozicioniranja

Android aplikacija (ARCore Geospatial, na osnovu Google primera `geospatial_java`, Apache 2.0)
koja postavlja vojnika od 5 cm na tačnu lokaciju i pokazuje koliko je telefon precizno određen.

- Pravi se automatski na GitHub-u (Actions → „Geo test (Android APK)").
- Gotov fajl: **Releases → geotest → PF-geotest.apk**.
- ARCore API ključ se čuva kao tajna repozitorijuma `ARCORE_API_KEY` (Settings → Secrets and variables → Actions).
- Potpis aplikacije: `geotest/app/pf-test.keystore` (samo za test), SHA-1 `65:2B:C8:B0:F5:12:A1:AE:BB:C5:B6:7A:B0:5C:83:36:B7:BF:24:21`.
