// భాష ఎంపిక: తెలుగు (డిఫాల్ట్) / English. ఎంపిక బ్రౌజర్‌లో గుర్తుంటుంది.
(function () {
  var saved = null;
  try { saved = localStorage.getItem('rk_lang'); } catch (e) {}
  var lang = saved || ((navigator.language || '').toLowerCase().indexOf('te') === 0 ? 'te' : 'te');
  document.documentElement.lang = lang;
  window.rkToggleLang = function () {
    lang = document.documentElement.lang === 'te' ? 'en' : 'te';
    document.documentElement.lang = lang;
    try { localStorage.setItem('rk_lang', lang); } catch (e) {}
  };
})();
