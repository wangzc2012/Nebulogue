---
title: 八音盒
date: 2025-07-15 00:00:00
aplayer: true
comments: false
---

<link rel="stylesheet" href="/css/musicbox.css">

<div id="musicbox-app">
  <div class="mb-section">
    <div class="mb-section-title">⏱ 倒计时</div>
    <div class="timer-display">
      <span class="timer-digit" id="timer-hours">00</span><span class="timer-sep">:</span>
      <span class="timer-digit" id="timer-minutes">25</span><span class="timer-sep">:</span>
      <span class="timer-digit" id="timer-seconds">00</span>
    </div>
    <div class="timer-inputs">
      <label>时 <input type="text" id="input-hours" value="0" inputmode="numeric" pattern="[0-9]*"></label>
      <label>分 <input type="text" id="input-minutes" value="25" inputmode="numeric" pattern="[0-9]*"></label>
      <label>秒 <input type="text" id="input-seconds" value="0" inputmode="numeric" pattern="[0-9]*"></label>
    </div>
    <div class="timer-controls">
      <button class="mb-btn primary" id="timer-toggle">▶ 开始</button>
      <button class="mb-btn" id="timer-reset" disabled>⏹ 重置</button>
    </div>
  </div>

  <div class="mb-section">
    <div class="mb-section-title">🎵 音乐播放器</div>
    <div class="now-playing" id="now-playing">未播放</div>
    <div class="progress-row">
      <span class="progress-time" id="progress-current">00:00</span>
      <div class="progress-track-wrap">
        <input type="range" class="progress-track" id="progress-track" min="0" max="1" step="any" value="0">
      </div>
      <span class="progress-time" id="progress-remaining">-00:00</span>
    </div>
    <div class="player-controls">
      <button class="mb-btn" id="player-prev">⏮</button>
      <button class="mb-btn primary" id="player-play">▶</button>
      <button class="mb-btn" id="player-next">⏭</button>
    </div>
    <div class="volume-row">
      <span>🔊</span>
      <input type="range" id="volume-slider" min="0" max="1" step="0.05" value="0.5">
    </div>
    <div class="loop-row">
      <span class="loop-label">循环：</span>
      <button class="loop-btn active" id="loop-all">全部循环</button>
      <button class="loop-btn" id="loop-one">单曲循环</button>
      <button class="loop-btn" id="loop-none">不循环</button>
    </div>
  </div>

  <div class="mb-content">
    <div class="mb-section">
      <div class="mb-section-title">📀 专辑列表</div>
      <div id="albums-container"></div>
    </div>
    <div class="mb-section" id="playlist-section">
      <div class="mb-section-title">📋 播放队列</div>
      <div class="playlist-header">
        <span id="playlist-count">共 0 首</span>
        <button id="playlist-clear">🗑 清空</button>
      </div>
      <div id="playlist-container"></div>
    </div>
  </div>
</div>

<script data-pjax src="/js/musicbox.js"></script>
