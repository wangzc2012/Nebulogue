;(function () {
  'use strict'

  /* ==================== Music Data ==================== */

  var albums = [
    {
      name: 'Volume Alpha',
      tracks: [
        { name: 'Beginning',        artist: 'C418', album: 'Volume Alpha', file: 'Beginning - C418.mp3' },
        { name: 'Cat',              artist: 'C418', album: 'Volume Alpha', file: 'Cat - C418.mp3' },
        { name: 'Chris',            artist: 'C418', album: 'Volume Alpha', file: 'Chris - C418.mp3' },
        { name: 'Clark',            artist: 'C418', album: 'Volume Alpha', file: 'Clark - C418.mp3' },
        { name: 'Danny',            artist: 'C418', album: 'Volume Alpha', file: 'Danny - C418.mp3' },
        { name: 'Death',            artist: 'C418', album: 'Volume Alpha', file: 'Death - C418.mp3' },
        { name: 'Dog',              artist: 'C418', album: 'Volume Alpha', file: 'Dog - C418.mp3' },
        { name: 'Door',             artist: 'C418', album: 'Volume Alpha', file: 'Door - C418.mp3' },
        { name: 'Droopy Likes Ricochet',  artist: 'C418', album: 'Volume Alpha', file: 'Droopy Likes Ricochet - C418.mp3' },
        { name: 'Droopy Likes Your Face', artist: 'C418', album: 'Volume Alpha', file: 'Droopy Likes Your Face - C418.mp3' },
        { name: 'Dry Hands',        artist: 'C418', album: 'Volume Alpha', file: 'Dry Hands - C418.mp3' },
        { name: 'Équinoxe',         artist: 'C418', album: 'Volume Alpha', file: 'Équinoxe - C418.mp3' },
        { name: 'Haggström',        artist: 'C418', album: 'Volume Alpha', file: 'Haggström - C418.mp3' },
        { name: 'Key',              artist: 'C418', album: 'Volume Alpha', file: 'Key - C418.mp3' },
        { name: 'Living Mice',      artist: 'C418', album: 'Volume Alpha', file: 'Living Mice - C418.mp3' },
        { name: 'Mice on Venus',    artist: 'C418', album: 'Volume Alpha', file: 'Mice on Venus - C418.mp3' },
        { name: 'Minecraft',        artist: 'C418', album: 'Volume Alpha', file: 'Minecraft - C418.mp3' },
        { name: 'Moog City',        artist: 'C418', album: 'Volume Alpha', file: 'Moog City - C418.mp3' },
        { name: 'Oxygène',          artist: 'C418', album: 'Volume Alpha', file: 'Oxygène - C418.mp3' },
        { name: 'Subwoofer Lullaby', artist: 'C418', album: 'Volume Alpha', file: 'Subwoofer Lullaby - C418.mp3' },
        { name: 'Sweden',           artist: 'C418', album: 'Volume Alpha', file: 'Sweden - C418.mp3' },
        { name: 'Thirteen',         artist: 'C418', album: 'Volume Alpha', file: 'Thirteen - C418.mp3' },
        { name: 'Wet Hands',        artist: 'C418', album: 'Volume Alpha', file: 'Wet Hands - C418.mp3' }
      ]
    },
    {
      name: 'Volume Beta',
      tracks: [
        { name: 'Alpha',            artist: 'C418', album: 'Volume Beta', file: 'Alpha - C418.mp3' },
        { name: 'Aria Math',        artist: 'C418', album: 'Volume Beta', file: 'Aria Math - C418.mp3' },
        { name: 'Ballad of the Cats', artist: 'C418', album: 'Volume Beta', file: 'Ballad of the Cats - C418.mp3' },
        { name: 'Beginning 2',      artist: 'C418', album: 'Volume Beta', file: 'Beginning 2 - C418.mp3' },
        { name: 'Biome Fest',       artist: 'C418', album: 'Volume Beta', file: 'Biome Fest - C418.mp3' },
        { name: 'Blind Spots',      artist: 'C418', album: 'Volume Beta', file: 'Blind Spots - C418.mp3' },
        { name: 'Blocks',           artist: 'C418', album: 'Volume Beta', file: 'Blocks - C418.mp3' },
        { name: 'Chirp',            artist: 'C418', album: 'Volume Beta', file: 'Chirp - C418.mp3' },
        { name: 'Concrete Halls',   artist: 'C418', album: 'Volume Beta', file: 'Concrete Halls - C418.mp3' },
        { name: 'Dead Voxel',       artist: 'C418', album: 'Volume Beta', file: 'Dead Voxel - C418.mp3' },
        { name: 'Dreiton',          artist: 'C418', album: 'Volume Beta', file: 'Dreiton - C418.mp3' },
        { name: 'Eleven',           artist: 'C418', album: 'Volume Beta', file: 'Eleven - C418.mp3' },
        { name: 'Far',              artist: 'C418', album: 'Volume Beta', file: 'Far - C418.mp3' },
        { name: 'Flake',            artist: 'C418', album: 'Volume Beta', file: 'Flake - C418.mp3' },
        { name: 'Floating Trees',   artist: 'C418', album: 'Volume Beta', file: 'Floating Trees - C418.mp3' },
        { name: 'Haunt Muskie',     artist: 'C418', album: 'Volume Beta', file: 'Haunt Muskie - C418.mp3' },
        { name: 'Intro',            artist: 'C418', album: 'Volume Beta', file: 'Intro - C418.mp3' },
        { name: 'Ki',               artist: 'C418', album: 'Volume Beta', file: 'Ki - C418.mp3' },
        { name: 'Kyoto',            artist: 'C418', album: 'Volume Beta', file: 'Kyoto - C418.mp3' },
        { name: 'Mall',             artist: 'C418', album: 'Volume Beta', file: 'Mall - C418.mp3' },
        { name: 'Mellohi',          artist: 'C418', album: 'Volume Beta', file: 'Mellohi - C418.mp3' },
        { name: 'Moog City 2',      artist: 'C418', album: 'Volume Beta', file: 'Moog City 2 - C418.mp3' },
        { name: 'Mutation',         artist: 'C418', album: 'Volume Beta', file: 'Mutation - C418.mp3' },
        { name: 'Stal',             artist: 'C418', album: 'Volume Beta', file: 'Stal - C418.mp3' },
        { name: 'Strad',            artist: 'C418', album: 'Volume Beta', file: 'Strad - C418.mp3' },
        { name: 'Taswell',          artist: 'C418', album: 'Volume Beta', file: 'Taswell - C418.mp3' },
        { name: 'The End',          artist: 'C418', album: 'Volume Beta', file: 'The End - C418.mp3' },
        { name: 'Wait',             artist: 'C418', album: 'Volume Beta', file: 'Wait - C418.mp3' },
        { name: 'Warmth',           artist: 'C418', album: 'Volume Beta', file: 'Warmth - C418.mp3' }
      ]
    }
  ]

  var allTracks = (function () {
    var list = []
    albums.forEach(function (album) {
      album.tracks.forEach(function (t) { list.push(t) })
    })
    return list
  })()

  /* ==================== State ==================== */

  var state = {
    timer: {
      total: 0,
      remaining: 0,
      running: false,
      paused: false,
      interval: null
    },
    player: {
      audio: null,
      playing: false,
      currentIndex: -1,
      loopMode: 'all'
    },
    playlist: [],
    progressSeeking: false,
    inited: false
  }

  /* ==================== DOM Cache ==================== */

  var $ = function (id) { return document.getElementById(id) }

  var dom = {}

  /* ==================== Helpers ==================== */

  function pad2(n) { return String(n).padStart(2, '0') }

  function formatTime(s) {
    if (isNaN(s) || s < 0) return '00:00'
    s = Math.floor(s)
    var h = Math.floor(s / 3600)
    var m = Math.floor((s % 3600) / 60)
    var sec = s % 60
    if (h > 0) return h + ':' + pad2(m) + ':' + pad2(sec)
    return pad2(m) + ':' + pad2(sec)
  }

  function getTrackUrl(track) {
    if (!track || !track.album || !track.file) return ''
    return '/music/minecraft/' + encodeURIComponent(track.album) + '/' + encodeURIComponent(track.file)
  }

  /* ==================== Timer ==================== */

  function updateTimerDisplay() {
    var r = state.timer.remaining
    dom.timerHours.textContent = pad2(Math.floor(r / 3600))
    dom.timerMinutes.textContent = pad2(Math.floor((r % 3600) / 60))
    dom.timerSeconds.textContent = pad2(r % 60)
  }

  function timerTick() {
    if (state.timer.remaining > 0) {
      state.timer.remaining--
      updateTimerDisplay()
    }
    if (state.timer.remaining <= 0) {
      clearInterval(state.timer.interval)
      state.timer.interval = null
      state.timer.running = false
      state.timer.paused = false
      dom.timerToggle.disabled = false
      dom.timerToggle.textContent = '▶ 开始'
      dom.timerReset.disabled = true
      dom.inputHours.disabled = false
      dom.inputMinutes.disabled = false
      dom.inputSeconds.disabled = false
    }
  }

  function readTimerInputs() {
    var h = parseInt(dom.inputHours.value, 10)
    var m = parseInt(dom.inputMinutes.value, 10)
    var s = parseInt(dom.inputSeconds.value, 10)
    if (isNaN(h) || h < 0) h = 0
    if (isNaN(m) || m < 0) m = 0
    if (isNaN(s) || s < 0) s = 0
    return { h: h, m: m, s: s, total: h * 3600 + m * 60 + s }
  }

  function validateTimerInputs(input) {
    if (input.total <= 0) { alert('倒计时时间必须大于 0'); return false }
    if (input.m > 59) { alert('分钟不能超过 59'); return false }
    if (input.s > 59) { alert('秒钟不能超过 59'); return false }
    return true
  }

  function startTimer(total) {
    state.timer.total = total
    state.timer.remaining = total
    state.timer.running = true
    state.timer.paused = false
    dom.timerToggle.textContent = '⏸ 暂停'
    dom.timerReset.disabled = false
    dom.inputHours.disabled = true
    dom.inputMinutes.disabled = true
    dom.inputSeconds.disabled = true
    updateTimerDisplay()
    state.timer.interval = setInterval(timerTick, 1000)
  }

  function toggleTimer() {
    if (state.timer.running) {
      /* pause */
      state.timer.paused = true
      state.timer.running = false
      clearInterval(state.timer.interval)
      state.timer.interval = null
      dom.timerToggle.textContent = '▶ 继续'
      dom.timerReset.disabled = false
      dom.inputHours.disabled = false
      dom.inputMinutes.disabled = false
      dom.inputSeconds.disabled = false
      dom.inputHours.value = pad2(Math.floor(state.timer.remaining / 3600))
      dom.inputMinutes.value = pad2(Math.floor((state.timer.remaining % 3600) / 60))
      dom.inputSeconds.value = pad2(state.timer.remaining % 60)
      return
    }
    if (state.timer.paused) {
      /* resume with new inputs */
      var input = readTimerInputs()
      if (!validateTimerInputs(input)) return
      startTimer(input.total)
      return
    }
    /* start new */
    var input = readTimerInputs()
    if (!validateTimerInputs(input)) return
    startTimer(input.total)
  }

  function resetTimer() {
    clearInterval(state.timer.interval)
    state.timer.interval = null
    state.timer.running = false
    state.timer.paused = false
    state.timer.remaining = state.timer.total
    updateTimerDisplay()
    dom.timerToggle.disabled = false
    dom.timerToggle.textContent = '▶ 开始'
    dom.timerReset.disabled = true
    dom.inputHours.disabled = false
    dom.inputMinutes.disabled = false
    dom.inputSeconds.disabled = false
    dom.inputHours.value = pad2(Math.floor(state.timer.total / 3600))
    dom.inputMinutes.value = pad2(Math.floor((state.timer.total % 3600) / 60))
    dom.inputSeconds.value = pad2(state.timer.total % 60)
  }

  /* ==================== Player ==================== */

  function initAudio() {
    if (state.player.audio) return
    var a = new Audio()
    a.volume = 0.5
    a.addEventListener('ended', function () {
      if (state.player.loopMode === 'one') {
        a.currentTime = 0
        a.play().catch(function () {})
      } else {
        nextTrack()
      }
    })
    a.addEventListener('play', function () {
      state.player.playing = true
      dom.playerPlay.textContent = '⏸'
    })
    a.addEventListener('pause', function () {
      state.player.playing = false
      dom.playerPlay.textContent = '▶'
    })
    a.addEventListener('timeupdate', updateProgress)
    a.addEventListener('loadedmetadata', updateProgress)
    state.player.audio = a
  }

  function getCurrentTrack() {
    if (state.player.currentIndex < 0 || state.player.currentIndex >= state.playlist.length) return null
    return state.playlist[state.player.currentIndex]
  }

  function getCurrentTrackDisplay() {
    var t = getCurrentTrack()
    if (!t) return '未播放'
    return (t.album ? '[' + t.album + '] ' : '') + t.name + ' - ' + t.artist
  }

  function playTrack(index) {
    if (index < 0 || index >= state.playlist.length) return
    state.player.currentIndex = index
    var track = state.playlist[index]
    var url = getTrackUrl(track)
    if (!url) return
    initAudio()
    var a = state.player.audio
    a.src = url
    a.load()
    a.play().catch(function (e) { console.error('playback error:', e) })
    dom.nowPlaying.textContent = getCurrentTrackDisplay()
    dom.progressTrack.value = '0'
    dom.progressTrack.style.setProperty('--pct', '0%')
    dom.progressCurrent.textContent = '00:00'
    dom.progressRemaining.textContent = '-00:00'
    renderPlaylist()
  }

  function togglePlay() {
    initAudio()
    if (state.playlist.length === 0) return
    if (state.player.currentIndex < 0) { playTrack(0); return }
    var a = state.player.audio
    if (a.paused) { a.play().catch(function () {}) }
    else { a.pause() }
  }

  function nextTrack() {
    if (state.playlist.length === 0) return
    var next
    if (state.player.loopMode === 'all' || state.player.loopMode === 'one') {
      next = (state.player.currentIndex + 1) % state.playlist.length
    } else {
      next = state.player.currentIndex + 1
      if (next >= state.playlist.length) {
        state.player.audio.pause()
        state.player.currentIndex = -1
        dom.nowPlaying.textContent = '播放完毕'
        renderPlaylist()
        return
      }
    }
    playTrack(next)
  }

  function prevTrack() {
    if (state.playlist.length === 0 || state.player.currentIndex < 0) return
    var prev = state.player.currentIndex <= 0 ? state.playlist.length - 1 : state.player.currentIndex - 1
    playTrack(prev)
  }

  function setVolume(val) {
    initAudio()
    state.player.audio.volume = parseFloat(val)
  }

  function setLoopMode(mode) {
    state.player.loopMode = mode
    dom.loopAll.classList.toggle('active', mode === 'all')
    dom.loopOne.classList.toggle('active', mode === 'one')
    dom.loopNone.classList.toggle('active', mode === 'none')
  }

  /* ==================== Progress ==================== */

  function updateProgress() {
    if (state.progressSeeking) return
    var a = state.player.audio
    if (!a || !a.duration || isNaN(a.duration)) {
      dom.progressTrack.style.setProperty('--pct', '0%')
      dom.progressCurrent.textContent = '00:00'
      dom.progressRemaining.textContent = '-00:00'
      return
    }
    dom.progressTrack.disabled = false
    var pct = a.currentTime / a.duration
    dom.progressTrack.value = String(pct)
    dom.progressTrack.style.setProperty('--pct', (pct * 100) + '%')
    dom.progressCurrent.textContent = formatTime(a.currentTime)
    dom.progressRemaining.textContent = '-' + formatTime(a.duration - a.currentTime)
  }

  function initProgressBar() {
    var track = dom.progressTrack
    if (!track) return

    function ratioFromEvent(e) {
      var rect = track.getBoundingClientRect()
      var r = (e.clientX - rect.left) / rect.width
      return Math.max(0, Math.min(1, r))
    }

    function updateVisual(pct) {
      var a = state.player.audio
      if (!a || !a.duration || isNaN(a.duration)) return
      var t = pct * a.duration
      if (t < 0) t = 0
      if (t > a.duration) t = a.duration
      track.value = String(pct)
      track.style.setProperty('--pct', (pct * 100) + '%')
      dom.progressCurrent.textContent = formatTime(t)
      dom.progressRemaining.textContent = '-' + formatTime(a.duration - t)
    }

    function onPointerDown(e) {
      var a = state.player.audio
      if (!a || !a.duration || isNaN(a.duration)) { e.preventDefault(); return }
      e.preventDefault()
      state.progressSeeking = true
      updateVisual(ratioFromEvent(e))
      track.setPointerCapture(e.pointerId)
      track.addEventListener('pointermove', onPointerMove)
      track.addEventListener('pointerup', onPointerUp)
      track.addEventListener('pointercancel', onPointerUp)
    }

    function onPointerMove(e) {
      if (!state.progressSeeking) return
      updateVisual(ratioFromEvent(e))
    }

    function onPointerUp(e) {
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', onPointerUp)
      track.removeEventListener('pointercancel', onPointerUp)
      if (!state.progressSeeking) return
      var a = state.player.audio
      if (!a || !a.duration || isNaN(a.duration)) {
        state.progressSeeking = false
        return
      }
      var pct = ratioFromEvent(e)
      var t = pct * a.duration
      if (t < 0) t = 0
      if (t > a.duration) t = a.duration
      updateVisual(pct)
      a.currentTime = t
      state.progressSeeking = false
    }

    track.addEventListener('pointerdown', onPointerDown)
  }

  /* ==================== Playlist ==================== */

  function initPlaylist() {
    state.playlist = allTracks.slice()
  }

  function addToPlaylist(track) {
    state.playlist.push(track)
    renderPlaylist()
  }

  function addAlbumToPlaylist(albumName) {
    for (var i = 0; i < albums.length; i++) {
      if (albums[i].name === albumName) {
        albums[i].tracks.forEach(function (t) { state.playlist.push(t) })
        renderPlaylist()
        return
      }
    }
  }

  function removeFromPlaylist(index) {
    if (index < 0 || index >= state.playlist.length) return
    var wasCurrent = index === state.player.currentIndex
    state.playlist.splice(index, 1)
    if (wasCurrent) {
      if (state.playlist.length === 0) {
        if (state.player.audio) {
          state.player.audio.pause()
          state.player.audio.src = ''
        }
        state.player.currentIndex = -1
        state.player.playing = false
        dom.playerPlay.textContent = '▶'
        dom.nowPlaying.textContent = '未播放'
      } else {
        var nextIndex = index >= state.playlist.length ? 0 : index
        playTrack(nextIndex)
        return
      }
    } else if (index < state.player.currentIndex) {
      state.player.currentIndex--
    }
    renderPlaylist()
  }

  function clearPlaylist() {
    var items = dom.playlistContainer.querySelectorAll('.playlist-item')
    if (items.length === 0) return
    dom.playlistClear.disabled = true

    items.forEach(function (el) {
      el.style.animation = 'mb-fade-out 0.25s ease both'
    })

    setTimeout(function () {
      var section = dom.playlistSection
      var startH = section.offsetHeight

      state.playlist = []
      if (state.player.audio) {
        state.player.audio.pause()
        state.player.audio.src = ''
      }
      state.player.currentIndex = -1
      state.player.playing = false
      dom.playerPlay.textContent = '▶'
      dom.nowPlaying.textContent = '未播放'
      dom.playlistClear.disabled = false
      renderPlaylist()

      void section.offsetHeight
      var endH = Math.max(section.scrollHeight, 420)

      section.style.height = startH + 'px'
      section.classList.add('collapsing')
      void section.offsetHeight
      section.style.height = endH + 'px'

      function onEnd() {
        section.removeEventListener('transitionend', onEnd)
        section.classList.remove('collapsing')
        section.style.height = ''
      }
      section.addEventListener('transitionend', onEnd)
    }, 250)
  }

  /* ==================== Render ==================== */

  function renderAlbums() {
    var html = ''
    albums.forEach(function (album, ai) {
      html += '<div class="album-block collapsed">'
      html += '<div class="album-header" data-toggle="' + ai + '">'
      html += '<span class="album-indicator">▾</span>'
      html += '<span class="album-name">' + escapeHtml(album.name) + '</span>'
      html += '<span class="album-count">共 ' + album.tracks.length + ' 首</span>'
      html += '<button class="btn-sm" data-action="add-album" data-album="' + escapeAttr(album.name) + '">+ 添加专辑</button>'
      html += '</div>'
      html += '<div class="album-tracks">'
      album.tracks.forEach(function (track) {
        html += '<div class="album-track">'
        html += '<span class="track-name" title="' + escapeAttr(track.name) + '">' + escapeHtml(track.name) + '</span>'
        html += '<button class="btn-sm" data-action="add-track" data-album="' + escapeAttr(album.name) + '" data-track="' + escapeAttr(track.name) + '">+ 添加</button>'
        html += '</div>'
      })
      html += '</div></div>'
    })
    dom.albumsContainer.innerHTML = html

    dom.albumsContainer.querySelectorAll('.album-header').forEach(function (header) {
      header.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') return
        this.parentElement.classList.toggle('collapsed')
      })
    })
  }

  function animateRemoveTrack(el, index) {
    el.classList.add('removing')
    var h = el.offsetHeight
    el.style.transition = 'height 0.3s ease, opacity 0.3s ease, transform 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease, margin-top 0.3s ease, margin-bottom 0.3s ease'
    el.style.height = h + 'px'

    void el.offsetHeight

    el.style.opacity = '0'
    el.style.transform = 'translateX(16px)'
    el.style.height = '0px'
    el.style.paddingTop = '0px'
    el.style.paddingBottom = '0px'
    el.style.marginTop = '0px'
    el.style.marginBottom = '0px'
    el.style.borderTopWidth = '0'
    el.style.borderBottomWidth = '0'

    var onEnd = function () {
      el.removeEventListener('transitionend', onEnd)

      var wasPlaying = index === state.player.currentIndex
      state.playlist.splice(index, 1)

      dom.playlistContainer.removeChild(el)

      var items = dom.playlistContainer.querySelectorAll('.playlist-item')
      for (var i = index; i < items.length; i++) {
        items[i].setAttribute('data-index', String(i))
      }

      if (wasPlaying) {
        if (state.playlist.length === 0) {
          if (state.player.audio) {
            state.player.audio.pause()
            state.player.audio.src = ''
          }
          state.player.currentIndex = -1
          state.player.playing = false
          dom.playerPlay.textContent = '▶'
          dom.nowPlaying.textContent = '未播放'
        } else {
          var nextIdx = Math.min(index, state.playlist.length - 1)
          playTrack(nextIdx)
          return
        }
      } else if (index < state.player.currentIndex) {
        state.player.currentIndex--
      }

      dom.playlistCount.textContent = '共 ' + state.playlist.length + ' 首'
    }
    el.addEventListener('transitionend', onEnd)
  }

  function renderPlaylist() {
    var html = ''
    state.playlist.forEach(function (track, i) {
      var active = i === state.player.currentIndex ? ' active' : ''
      html += '<div class="playlist-item' + active + '" data-index="' + i + '">'
      html += '<span class="pl-track-name">' + escapeHtml(track.name) + ' - ' + escapeHtml(track.artist) + '</span>'
      html += '<span class="pl-track-album">' + escapeHtml(track.album || '') + '</span>'
      html += '<button class="btn-sm pl-remove" data-action="remove">✕</button>'
      html += '</div>'
    })
    dom.playlistContainer.innerHTML = html
    dom.playlistCount.textContent = '共 ' + state.playlist.length + ' 首'
  }

  function escapeHtml(s) {
    if (typeof s !== 'string') return ''
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  }

  function escapeAttr(s) {
    if (typeof s !== 'string') return ''
    return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  /* ==================== Init ==================== */

  function init() {
    if (state.inited) return
    dom.root = $('musicbox-app')
    if (!dom.root) return
    state.inited = true

    dom.timerHours = $('timer-hours')
    dom.timerMinutes = $('timer-minutes')
    dom.timerSeconds = $('timer-seconds')
    dom.inputHours = $('input-hours')
    dom.inputMinutes = $('input-minutes')
    dom.inputSeconds = $('input-seconds')
    dom.timerToggle = $('timer-toggle')
    dom.timerReset = $('timer-reset')
    dom.nowPlaying = $('now-playing')
    dom.playerPlay = $('player-play')
    dom.playerPrev = $('player-prev')
    dom.playerNext = $('player-next')
    dom.volumeSlider = $('volume-slider')
    dom.loopAll = $('loop-all')
    dom.loopOne = $('loop-one')
    dom.loopNone = $('loop-none')
    dom.albumsContainer = $('albums-container')
    dom.playlistSection = $('playlist-section')
    dom.playlistContainer = $('playlist-container')
    dom.playlistCount = $('playlist-count')
    dom.playlistClear = $('playlist-clear')
    dom.progressTrack = $('progress-track')
    dom.progressCurrent = $('progress-current')
    dom.progressRemaining = $('progress-remaining')

    updateTimerDisplay()
    initPlaylist()
    renderAlbums()
    renderPlaylist()
    initProgressBar()
    initAudio()
    setLoopMode('all')

    function sanitizeInput(el, max) {
      var v = parseInt(el.value, 10)
      if (isNaN(v) || v < 0) { el.value = '0'; return }
      if (max !== null && v > max) { el.value = String(max); return }
      el.value = String(v)
    }
    dom.inputHours.addEventListener('input', function () { sanitizeInput(this, null) })
    dom.inputMinutes.addEventListener('input', function () { sanitizeInput(this, 60) })
    dom.inputSeconds.addEventListener('input', function () { sanitizeInput(this, 60) })

    dom.timerToggle.addEventListener('click', toggleTimer)
    dom.timerReset.addEventListener('click', resetTimer)
    dom.playerPlay.addEventListener('click', togglePlay)
    dom.playerPrev.addEventListener('click', prevTrack)
    dom.playerNext.addEventListener('click', nextTrack)
    dom.volumeSlider.addEventListener('input', function () { setVolume(this.value) })
    dom.loopAll.addEventListener('click', function () { setLoopMode('all') })
    dom.loopOne.addEventListener('click', function () { setLoopMode('one') })
    dom.loopNone.addEventListener('click', function () { setLoopMode('none') })
    dom.playlistClear.addEventListener('click', clearPlaylist)

    document.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Spacebar') {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return
        e.preventDefault()
        togglePlay()
      }
    })

    dom.playlistContainer.addEventListener('click', function (e) {
      var item = e.target
      while (item && item !== dom.playlistContainer && !item.hasAttribute('data-index')) {
        item = item.parentNode
      }
      if (!item || item === dom.playlistContainer) return
      var idx = parseInt(item.getAttribute('data-index'), 10)
      if (e.target.getAttribute('data-action') === 'remove') {
        animateRemoveTrack(item, idx)
      } else {
        playTrack(idx)
      }
    })

    dom.albumsContainer.addEventListener('click', function (e) {
      var target = e.target
      if (target.tagName !== 'BUTTON') return
      var action = target.getAttribute('data-action')
      if (action === 'add-album') {
        addAlbumToPlaylist(target.getAttribute('data-album'))
      } else if (action === 'add-track') {
        var albumName = target.getAttribute('data-album')
        var trackName = target.getAttribute('data-track')
        for (var i = 0; i < albums.length; i++) {
          if (albums[i].name === albumName) {
            var tr = albums[i].tracks
            for (var j = 0; j < tr.length; j++) {
              if (tr[j].name === trackName) {
                addToPlaylist(tr[j])
                return
              }
            }
          }
        }
      }
    })
  }

  function destroy() {
    if (state.timer.interval) {
      clearInterval(state.timer.interval)
      state.timer.interval = null
    }
    state.timer.running = false
    state.timer.paused = false
    if (state.player.audio) {
      state.player.audio.pause()
      state.player.audio.src = ''
    }
    state.inited = false
  }

  document.addEventListener('pjax:send', destroy)

  function boot() {
    if (document.getElementById('musicbox-app')) {
      init()
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot)
  } else {
    boot()
  }
  document.addEventListener('pjax:complete', boot)
})()
