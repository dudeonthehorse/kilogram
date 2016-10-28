var format = require('util').format;
var $ = require('cheerio');
var getAttrs = require('./util/getAttrs');


/**
 * Returns output for column elements.
 */

module.exports = function(col) {
  var output  = '';
  var inner   = $(col).html();
  var classes = ['column'];
  var expander = '';
  var attrs = getAttrs(col);

  // Add 1 to include current column
  var colCount = $(col).siblings().length + 1;

  // Inherit classes from the <column> tag
  if ($(col).attr('class')) {
    classes = classes.concat($(col).attr('class').split(' '));
  }
  var colsNum = $(col).parent().parent().attr('cols');

  // Check number of columns to define a outlook prefix
  switch (colsNum) {
    case '2':
      if ($(col).next(this.components.cols).length) {
        return format('<div %s class="%s"><table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">%s</td></tr></table></div><!--[if (gte mso 9)|(IE)]></td><td width="50%" valign="top"><![endif]-->', attrs, classes.join(' '), inner);
      } else {
        return format('<div %s class="%s"><table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">%s</td></tr></table></div>', attrs, classes.join(' '), inner);
      };
    case '3':
      if ($(col).next(this.components.cols).length) {
        return format('<div %s class="%s"><table width="100%" cellpadding="0" cellspacing="0"><tr><td><table width="100%"><tr><td class="content" align="center">%s</td></tr></table></td></tr></table></div><!--[if (gte mso 9)|(IE)]></td><td width="33%" valign="top"><![endif]-->', attrs, classes.join(' '), inner);
      } else {
        return format('<div %s class="%s"><table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">%s</td></tr></table></div>', attrs, classes.join(' '), inner);
      }
    default: 
      return format('<div %s class="%s"><table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">%s</td></tr></table></div>', attrs, classes.join(' '), inner);

  }
}
