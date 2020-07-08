import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'sf-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class SFProcessComponent implements OnInit {
  ngOnInit() {
    const t = $('.circleRotator');
    const e = $('.circleRotator--5-items');
    t.each(function () {
      const c = $(this);
      const d = $('.circleRotator-circle', c);
      const  h = $('.circleRotator-item', c);
      const  f = ($('.circleRotatorContent', c), $('.circleRotatorContent-item', c));
      const  u = $('.circleRotator-description', c);
      const  m = $('.circleRotatorPagination', c);
      const  p = $('.circleRotatorPagination-item', c);
      const  v = c.hasClass('circleRotator--5-items') ? -10.5 : -14;

      function i(t, e, i) {
        c.addClass('animation');
        var n, a = p.length - 1,
          o = parseInt($('.circleRotatorPagination-item--active', m).attr('data-num')),
          s = (n = (n = a < (n = e ? 'prev' === i ? o - 1 : o + 1 : parseInt(t.attr('data-num'))) ? a : n) < 0 ? 0 : n) * v,
          r,
          l;
        0 === n ? c.addClass('circleRotator--first') : c.removeClass('circleRotator--first'), n === a ? c.addClass('circleRotator--last') : c.removeClass('circleRotator--last'), p.removeClass('circleRotatorPagination-item--active'), $('.circleRotatorPagination-item[data-num="' + n + '"]', c).addClass('circleRotatorPagination-item--active'), f.each(function (t, e) {
          var i = parseInt($(this).attr('data-num'));
          i === o && (r = $(this)), i === n && (l = $(this))
        }), r.fadeOut(200, function () {
          $(this).removeClass('circleRotatorContent-item--active').css({
            display: 'none'
          }), l.fadeIn(200, function () {
            $(this).addClass('circleRotatorContent-item--active')
          })
        }), 1 < u.length && u.removeClass('active').filter('[data-num="'+ n + '"]').addClass('active'), h.each(function (t, e) {
          var i = parseInt($(this).attr('data-num'));
          i === o && $(this).removeClass('circleRotator-item--active'), i === n && $(this).addClass('circleRotator-item--active')
        }), d.css({
          '-webkit-transform': 'rotate(' + s + 'deg)',
          '-moz-transform': 'rotate(' + s + 'deg)',
          '-ms-transform': 'rotate(' + s + 'deg)',
          '-o-transform': 'rotate(' + s + 'deg)',
          transform: 'rotate(' + s + 'deg)'
        }), setTimeout(function () {
          c.removeClass('animation')
        }, 400)
      }
      p.click(function (t) {
        t.preventDefault(), c.hasClass('animation') || i($(this), !1, !1)
      }), t.click(function (t) {
        t.preventDefault();
        var e = $(this).hasClass('circleRotatorPagination-prev') ? 'prev' : 'next';
        c.hasClass('animation') || i($(this), !0, e)
      }), h.click(function (t) {
        t.preventDefault(), c.hasClass('animation') || i($(this), !1, !1)
      })
    }), e.length && e.each(function () {
      var t = $(this);
      $('.circleRotatorContent-description p', t).matchHeight({
        byRow: !1
      })
    })
  }
}