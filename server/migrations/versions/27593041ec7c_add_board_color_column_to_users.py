"""add board_color column to users

Revision ID: 27593041ec7c
Revises: 0ce0bccf2f52
Create Date: 2023-04-19 11:53:26.443674

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '27593041ec7c'
down_revision = '0ce0bccf2f52'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('board_color', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('board_color')

    # ### end Alembic commands ###
