var format = require('util').format;
var $ = require('cheerio');
var getAttrs = require('./util/getAttrs');

/*
 *Kilogram -> https://github.com/dudeonthehorse/kilogram
 *Kilopad -> https://github.com/rbsx/kilopad 
 */
module.exports = function(element) {
  var inner = element.html();
  var attrs = getAttrs(element);

  switch (element[0].name) {
    // Kilogram* main table, wraps whole letter 
    // use <TR>s or <ROWER> inside 
    // --> <wrap></wrap>
    case this.components.wrap:
      var classes = ['middle'];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }

      return format('<div %s class="%s"><!--[if (gte mso 9)|(IE)]><table width="600" align="center" cellpadding="0" cellspacing="0"><tr><td><![endif]--><table class="outer" cellpadding="0" align="center">%s</table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></div>', attrs, classes.join(' '), inner);

    // Kilogram* row definer 
    // accept cols attribute with number of columns
    // - to add Kilogram classes
    // - and prepare columns for Outlook
    // creates one column by default 
    // --> <rower cols="2"></rower>
    case this.components.rower:
      var classes = ['row'];
      var cols = element.attr('cols');
      var cellspacing = typeof(element.attr('cellspacing')) == 'undefined' ? '0' : element.attr('cellspacing');
      var cellpadding = typeof(element.attr('cellpadding')) == 'undefined' ? '0' : element.attr('cellpadding');

      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }

      switch (cols) {
        case '1': 
          return format('<tr %s class="%s"><td class="one-column"><div class="column"><table width="100%" cellpadding="%s" cellspacing="%s"><tr><td align="center">%s</td></tr></table></div></td></tr>', attrs, classes.join(' '), cellspacing, cellpadding, inner);
        case '2': 
          return format('<tr %s class="%s"><td class="two-columns"><!--[if (gte mso 9)|(IE)]><table width="100%" cellpadding="%s" cellspacing="%s"><tr><td width="50%" valign="top"><![endif]-->%s<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr>', attrs, classes.join(' '), cellspacing, cellpadding, inner);
        case '3': 
          return format('<tr %s class="%s"><td class="three-columns"><!--[if (gte mso 9)|(IE)]><table width="100%" cellpadding="%s" cellspacing="%s"><tr><td width="33%" valign="top"><![endif]-->%s<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr>', attrs, classes.join(' '), cellspacing, cellpadding, inner);
        default:
          return format('<tr %s class="%s"><td class="one-column"><div class="column"><table width="100%" cellpadding="%s" cellspacing="%s"><tr><td>%s</td></tr></table></div></td></tr>', attrs, classes.join(' '), cellspacing, cellpadding, inner);
      }
      
    // Kilogram* columns definer
    // number of cols need to be equal to rower cols.
    // --> <cols></cols>
    case this.components.cols:
      return this.makeCols(element, 'cols');

    // <column> inky`s
    case this.components.columns:
      return this.makeColumn(element, 'columns');

    // Created table > tr > 
    // <row>
    case this.components.row:
      var classes = ['row'];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }

      return format('<table %s class="%s"><tbody><tr>%s</tr></tbody></table>', attrs, classes.join(' '), inner);

    // Creates table > td > td > 
    // <container>
    case this.components.container:
      var classes = ['container'];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }

      return format('<table %s align="center" class="%s"><tbody><tr><td>%s</td></tr></tbody></table>', attrs, classes.join(' '), inner);

    // Inky`s wrapper 
    // <wrapper>
    case this.components.wrapper:
      var classes = ['wrapper'];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }

      return format('<table %s class="%s" align="center"><tr><td class="wrapper-inner">%s</td></tr></table>', attrs, classes.join(' '), inner);

    default:
      // If it's not a custom component, return it as-is
      return format('<tr><td>%s</td></tr>', $.html(element, this.cheerioOpts));
  }
}
