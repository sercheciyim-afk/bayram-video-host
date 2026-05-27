(function () {
  var desktopSrc = "https://sercheciyim-afk.github.io/bayram-video-host/videos/bayram-desktop-hq.mp4";
  var mobileSrc = "https://sercheciyim-afk.github.io/bayram-video-host/videos/bayram-mobile-hq.mp4";
  var script = document.currentScript;

  function addStyles() {
    if (document.getElementById("bayram-scroll-video-styles")) return;

    var style = document.createElement("style");
    style.id = "bayram-scroll-video-styles";
    style.textContent =
      "@font-face{font-family:'Florisel Script';src:url('https://sercheciyim-afk.github.io/bayram-video-host/fonts/Floriselscript.ttf') format('truetype');font-weight:400;font-style:normal;font-display:swap;}" +
      "@font-face{font-family:'Evolventa';src:url('https://sercheciyim-afk.github.io/bayram-video-host/fonts/Evolventa-Regular.ttf') format('truetype');font-weight:400;font-style:normal;font-display:swap;}" +
      ".bayram-scroll-video{position:relative;height:200vh;min-height:1080px;background:#bde8ff;margin:0;padding:0;}" +
      ".bayram-scroll-video__stage{position:sticky;top:0;width:100%;height:100vh;overflow:hidden;background:#bde8ff;}" +
      ".bayram-scroll-video__media{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}" +
      ".bayram-scroll-video__media--mobile{display:none;}" +
      ".bayram-scroll-video__copy{position:relative;z-index:2;width:min(44vw,560px);margin-left:7vw;padding-top:10vh;color:#17231d;text-align:left;pointer-events:none;}" +
      ".bayram-scroll-video__arabic{margin:0 0 7vh;font-family:Amiri,'Times New Roman',serif;font-size:clamp(30px,3.7vw,56px);font-weight:400;line-height:1;letter-spacing:2px;color:#17231d;text-shadow:0 1px 18px rgba(255,255,255,.22);}" +
      ".bayram-scroll-video__title{margin:0;font-family:'Florisel Script','Snell Roundhand','Monotype Corsiva',cursive;font-size:clamp(58px,7vw,104px);font-weight:400;line-height:.78;letter-spacing:0;color:#17231d;text-shadow:0 2px 18px rgba(255,255,255,.2);}" +
      ".bayram-scroll-video__title br{display:block;}" +
      ".bayram-scroll-video__subtitle{max-width:420px;margin:9vh 0 0;font-family:Evolventa,Arial,sans-serif;font-size:clamp(19px,1.7vw,26px);font-weight:400;line-height:1.45;letter-spacing:0;color:#17231d;text-shadow:0 1px 16px rgba(255,255,255,.22);}" +
      ".bayram-scroll-video__button{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-width:280px;min-height:52px;margin-top:4.5vh;padding:14px 30px;border:1px solid rgba(23,35,29,.38);border-radius:999px;background:rgba(23,35,29,.12);color:#17231d;font-family:Evolventa,Arial,sans-serif;font-size:16px;font-weight:600;line-height:1;text-decoration:none;letter-spacing:0;box-shadow:0 14px 34px rgba(23,35,29,.08);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);pointer-events:auto;transition:background-color .18s ease,color .18s ease,transform .18s ease;}" +
      ".bayram-scroll-video__button:hover{background:#17231d;color:#fff;transform:translateY(-1px);}" +
      ".bayram-scroll-video__scroll{position:absolute;left:50%;bottom:28px;z-index:2;transform:translateX(-50%);font-family:Evolventa,Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:3px;color:rgba(255,255,255,.78);text-transform:uppercase;text-shadow:0 2px 12px rgba(0,0,0,.28);}" +
      "@media(max-width:760px){" +
      ".bayram-scroll-video{height:185vh;min-height:980px;}" +
      ".bayram-scroll-video__media--desktop{display:none;}" +
      ".bayram-scroll-video__media--mobile{display:block;}" +
      ".bayram-scroll-video__copy{width:min(92vw,430px);margin:0 auto;padding-top:7vh;text-align:center;color:#fff;}" +
      ".bayram-scroll-video__arabic{margin:0 0 4.2vh;font-size:clamp(32px,9vw,44px);line-height:1.05;letter-spacing:1.5px;color:#fff;text-shadow:0 2px 20px rgba(0,0,0,.24);}" +
      ".bayram-scroll-video__title{font-size:clamp(38px,11.5vw,56px);line-height:.9;color:#fff;text-shadow:0 2px 22px rgba(0,0,0,.24);white-space:nowrap;}" +
      ".bayram-scroll-video__title br{display:none;}" +
      ".bayram-scroll-video__subtitle{max-width:300px;margin:3.4vh auto 0;font-size:clamp(15px,4.2vw,19px);line-height:1.35;color:#fff;text-shadow:0 2px 18px rgba(0,0,0,.24);}" +
      ".bayram-scroll-video__button{width:min(72vw,290px);min-width:0;min-height:46px;margin-top:4vh;padding:12px 18px;border-color:rgba(255,255,255,.68);background:rgba(23,35,29,.18);color:#fff;font-size:clamp(14px,3.8vw,17px);gap:10px;text-shadow:0 1px 14px rgba(0,0,0,.18);box-shadow:none;}" +
      ".bayram-scroll-video__scroll{display:none;}" +
      "}";

    document.head.appendChild(style);
  }

  function createVideo(className, src) {
    var video = document.createElement("video");
    var source = document.createElement("source");

    video.className = className;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("aria-hidden", "true");

    source.src = src;
    source.type = "video/mp4";
    video.appendChild(source);

    return video;
  }

  function insertBlock() {
    addStyles();

    var block = document.createElement("section");
    var stage = document.createElement("div");
    var desktopVideo = createVideo("bayram-scroll-video__media bayram-scroll-video__media--desktop", desktopSrc);
    var mobileVideo = createVideo("bayram-scroll-video__media bayram-scroll-video__media--mobile", mobileSrc);
    var copy = document.createElement("div");
    var arabic = document.createElement("p");
    var title = document.createElement("h1");
    var subtitle = document.createElement("p");
    var button = document.createElement("a");
    var scrollHint = document.createElement("div");

    block.className = "bayram-scroll-video";
    block.setAttribute("data-bayram-scroll-video", "");
    stage.className = "bayram-scroll-video__stage";
    copy.className = "bayram-scroll-video__copy";
    arabic.className = "bayram-scroll-video__arabic";
    title.className = "bayram-scroll-video__title";
    subtitle.className = "bayram-scroll-video__subtitle";
    button.className = "bayram-scroll-video__button";
    scrollHint.className = "bayram-scroll-video__scroll";

    arabic.setAttribute("dir", "rtl");
    arabic.setAttribute("lang", "ar");
    arabic.textContent = "عيد أضحى مبارك";
    title.innerHTML = "Подарок от<br>Amatullah";
    subtitle.innerHTML = "Создай праздничное поздравление для своих<br>близких";
    button.href = "#create";
    button.innerHTML = "Создать поздравление <span aria-hidden=\"true\">→</span>";
    scrollHint.textContent = "Прокрути";

    copy.appendChild(arabic);
    copy.appendChild(title);
    copy.appendChild(subtitle);
    copy.appendChild(button);

    stage.appendChild(desktopVideo);
    stage.appendChild(mobileVideo);
    stage.appendChild(copy);
    stage.appendChild(scrollHint);
    block.appendChild(stage);

    if (script && script.parentNode) {
      script.parentNode.insertBefore(block, script);
    } else {
      document.body.insertBefore(block, document.body.firstChild);
    }

    initScrollVideo(block, desktopVideo, mobileVideo);
  }

  function initScrollVideo(block, desktopVideo, mobileVideo) {
    var mobileQuery = window.matchMedia("(max-width: 760px)");
    var activeVideo = null;
    var ticking = false;

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function getActiveVideo() {
      return mobileQuery.matches ? mobileVideo : desktopVideo;
    }

    function updateFrame() {
      var rect;
      var scrollableDistance;
      var progress;
      var targetTime;

      ticking = false;
      if (!activeVideo || !Number.isFinite(activeVideo.duration)) return;

      rect = block.getBoundingClientRect();
      scrollableDistance = Math.max(1, block.offsetHeight - window.innerHeight);
      progress = clamp(-rect.top / scrollableDistance, 0, 1);
      targetTime = progress * activeVideo.duration;

      if (Math.abs(activeVideo.currentTime - targetTime) > 0.025) {
        try {
          activeVideo.currentTime = targetTime;
        } catch (error) {}
      }
    }

    function requestFrame() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateFrame);
    }

    function wakeVideo(video) {
      var playPromise;

      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      playPromise = video.play();

      if (playPromise && typeof playPromise.then === "function") {
        playPromise.then(function () {
          video.pause();
          requestFrame();
        }).catch(function () {
          requestFrame();
        });
      } else {
        video.pause();
        requestFrame();
      }
    }

    function setActiveVideo() {
      var nextVideo = getActiveVideo();

      if (activeVideo === nextVideo) return;
      if (activeVideo) activeVideo.pause();

      activeVideo = nextVideo;
      wakeVideo(activeVideo);
      requestFrame();
    }

    desktopVideo.addEventListener("loadedmetadata", requestFrame);
    mobileVideo.addEventListener("loadedmetadata", requestFrame);
    desktopVideo.addEventListener("canplay", requestFrame);
    mobileVideo.addEventListener("canplay", requestFrame);

    setActiveVideo();
    mobileQuery.addEventListener("change", setActiveVideo);
    window.addEventListener("scroll", requestFrame, { passive: true });
    window.addEventListener("resize", requestFrame);
    window.addEventListener("load", requestFrame);
    window.addEventListener("touchstart", function () { wakeVideo(activeVideo); }, { passive: true });
    window.addEventListener("pointerdown", function () { wakeVideo(activeVideo); }, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertBlock);
  } else {
    insertBlock();
  }
})();
