import styles from './sass/main.scss';
import * as d3 from 'd3';
import { consentCheck } from './consent.js';

consentCheck();

// Collapse navigation on button and below 850px
const navbar = d3.select('#navbar-collapse');
const togglerButton = d3.select('#navbar-toggler').on('click', () => {
  if (navbar.style('display') === 'block') {
    navbar.style('display', 'none');
  } else {
    navbar.style('display', 'block');
  }
});

d3.select(window).on('resize', () => {
  if (window.innerWidth >= 850) {
    navbar.style('display', 'block');
  } else {
    navbar.style('display', 'none');
  }
});

// OMG Pprojects!
// https://bl.ocks.org/mbostock/1062544

var width = Math.max(10, innerWidth),
  height = Math.max(500, innerHeight);

var i = 0;

var svg = d3
  .select('#bubble')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .attr('preserveAspectRatio', 'xMinYMin')
  .attr('viewBox', [-width / 2, -height / 2, width, height]);

svg
  .append('rect')
  .attr('width', width)
  .attr('height', height)
  .attr('transform', `translate(${-width / 2}, ${-height / 2})`)
  .on('ontouchstart' in document ? 'touchmove' : 'mousemove', pproject);

function pproject() {
  var m = d3.mouse(this);

  svg
    .insert('circle', 'rect')
    .attr('cx', m[0])
    .attr('cy', m[1])
    .attr('r', 1e-6)
    .style('stroke', d3.hsl((i = (i + 1) % 360), 1, 0.5))
    .style('stroke-opacity', 1)
    .transition()
    .duration(2500)
    .ease(Math.sqrt)
    .attr('r', 100)
    .style('stroke-opacity', 1e-6)
    .remove();

  d3.event.preventDefault();
}

const video = document.createElement('video');
video.autoplay = true;
// video.muted = true;
video.style.display = 'none';
document.body.appendChild(video);

