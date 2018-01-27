import Vue from 'vue'
// Regex from https://github.com/dotneet/nuxt-device-detect
// eslint-disable-next-line
const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i

// eslint-disable-next-line
const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i

// eslint-disable-next-line
const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
// eslint-disable-next-line
const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i

export default async function ({req, store, app}, inject) {
  let userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  let cookieBreakpoint = getCookieItem('breakpoint', req);
  let cssBreakpoint = ''
console.log('dsfhjfdsahjdfshjdsfkhjkhjfasdhjkl')
  let $breakpoints = {}
  $breakpoints.isMobile = isMobile()
  $breakpoints.isTablet = isTablet()
  $breakpoints.isTouch = isTouch()
  $breakpoints.isDesktop = isDesktop()
  $breakpoints.isGteDesktop = !isTouch()
  $breakpoints.isDesktopWS = isDesktopWideScreen()
  $breakpoints.isDesktopHD = isDesktopHighDefinition()

  // keeps object reactive in in global space accessible in components
  createStore (store)

  if(process.client)
    window.addEventListener('resize',onResize)

  //in order to use in components this.$breakpoint.isMobile - is pointed to obkject in stroe for reactivity
  inject('breakpoints', store.state.$breakpoints)

  updateBreakpoint()

  //============================================================
  //
  //============================================================
  function createStore (store) {
    store.registerModule('$breakpoints', {
      namespaced: true,
      state: $breakpoints,
      mutations: {
        'RESIZE': function (state, $breakpoints) {
          // console.log(transition);
          store.state['$breakpoints'] = $breakpoints
        }
      }
    })
  }
  //============================================================
  //
  //============================================================
  function isMobile () {

    let result = false

    if (!cssBreakpoint && process.server && !cookieBreakpoint)
      result = (REGEX_MOBILE1.test(userAgent) || REGEX_MOBILE2.test(userAgent.substr(0, 4)))

    if (!cssBreakpoint && process.server && cookieBreakpoint)
      result =  (cookieBreakpoint ==='isMobile')

    if(process.client)
      result = (getCSSBreakpoint() === 'isMobile')

    if(result) setCookieItem('breakpoint','isMobile',Infinity,'/')

    return result
  }

  //============================================================
  //
  //============================================================
  function isTablet () {
    let result = false

    if (!cssBreakpoint && process.server && !cookieBreakpoint)
      result = (REGEX_MOBILE_OR_TABLET1.test(userAgent) || REGEX_MOBILE_OR_TABLET2.test(userAgent.substr(0, 4)))

    if(!cssBreakpoint && process.server && cookieBreakpoint)
      result =  (cookieBreakpoint ==='isTablet')

    if(process.client)
      result = (getCSSBreakpoint() === 'isTablet')

    if(result) setCookieItem('breakpoint','isTablet',Infinity,'/')

    return result
  }

  //============================================================
  //
  //============================================================
  function isTouch () {
    let result = false

    if (!cssBreakpoint && process.server && !cookieBreakpoint)
      result = isTablet () || isMobile ()

    if(!cssBreakpoint && process.server && cookieBreakpoint)
      result =  (cookieBreakpoint ==='isTablet' || cookieBreakpoint ==='isMobile')

    if(process.client)
      result = (getCSSBreakpoint() === 'isTablet' || getCSSBreakpoint() === 'isMobile')

    return result
  }

  //============================================================
  //
  //============================================================
  function isDesktop () {
    let result = false

    if (!cssBreakpoint && process.server && !cookieBreakpoint)
      result = !isTablet () || !isMobile ()

    if(!cssBreakpoint && process.server && cookieBreakpoint)
      result =  (cookieBreakpoint ==='isDesktop')

    if(cssBreakpoint && process.server)
      result =  (cookieBreakpoint ==='isDesktop')

    if(process.client)
      result = (getCSSBreakpoint() === 'isDesktop')

    if(result) setCookieItem('breakpoint','isDesktop',Infinity,'/')

    return result
  }

  //============================================================
  //
  //============================================================
  function isDesktopWideScreen () {
    let result = false

    if (!cssBreakpoint && process.server && !cookieBreakpoint)
      return false

    if(!cssBreakpoint && process.server && cookieBreakpoint)
      result =  (cookieBreakpoint ==='isDesktopWS')

    if(cssBreakpoint && process.server)
      result =  (cookieBreakpoint ==='isDesktopWS')

    if(process.client)
      result = (getCSSBreakpoint() === 'isDesktopWS')

    if(result) setCookieItem('breakpoint','isDesktopWS',Infinity,'/')

    return result
  }

  //============================================================
  //
  //============================================================
  function isDesktopHighDefinition () {
    let result = false

    if (!cssBreakpoint && process.server && !cookieBreakpoint)
      return false

    if(!cssBreakpoint && process.server && cookieBreakpoint)
      result =  (cookieBreakpoint ==='isDesktopHD')

    if(cssBreakpoint && process.server)
      result =  (cookieBreakpoint ==='isDesktopHD')

    if(process.client)
      result = (getCSSBreakpoint() === 'isDesktopHD')

    if(result) setCookieItem('breakpoint','isDesktopHD',Infinity,'/')

    return result
  }

  //============================================================
  //
  //============================================================
  function getCSSBreakpoint() {
    if(!process.client) throw new Error('Cannot read css breakpoint from server')
    // eslint-disable-next-line
    cssBreakpoint =  window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    return cssBreakpoint
  }

  //============================================================
  //
  //============================================================
    function getRawCookie(req) {
      let cookie = null;
      if (typeof window === 'undefined' && req)
          cookie = req.headers.cookie;
      else if(!req)
          cookie = document.cookie;
      return cookie;
    }
  //============================================================
  //
  //============================================================
    function getCookieItem(sKey,req) {
      let cookie = getRawCookie(req);

      if(!cookie) return false;
      // eslint-disable-next-line
      let val = decodeURIComponent(cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
      if(val==='false') return false
      else return val;
    }

    //============================================================
    //
    //============================================================
    function setCookieItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      if(typeof window === 'undefined') return;
      // eslint-disable-next-line
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
      var sExpires = "";
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
            break;
          case String:
            sExpires = "; expires=" + vEnd;
            break;
          case Date:
            sExpires = "; expires=" + vEnd.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
      return true;
    }
    //============================================================
    //
    //============================================================
    function onResize () {

      updateBreakpoint()
    }

    //============================================================
    //
    //============================================================
    function updateBreakpoint () {
      cookieBreakpoint = null
      cookieBreakpoint = null
      if(!cssBreakpoint && process.client) getCSSBreakpoint()
      if(cssBreakpoint) setCookieItem('breakpoint',cssBreakpoint,Infinity,'/')
      Vue.set($breakpoints,'isMobile',isMobile())
      Vue.set($breakpoints,'isTablet',isTablet())
      Vue.set($breakpoints,'isTouch',isTouch())
      Vue.set($breakpoints,'isDesktop',isDesktop())
      Vue.set($breakpoints,'isGteDesktop',!isTouch())
      Vue.set($breakpoints,'isDesktopWS',isDesktopWideScreen())
      Vue.set($breakpoints,'isDesktopHD',isDesktopHighDefinition())

      store.commit('$breakpoints/RESIZE', $breakpoints)
    }
}
